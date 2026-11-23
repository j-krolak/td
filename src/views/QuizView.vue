<script setup>
import { ref, computed, onBeforeUnmount } from "vue";
import { PYTANIA } from "../data/questions.js";

const LETTERS = "ABCDEFGH";
const CONF = ["nie zaznaczono", "zgaduję", "chyba tak", "pewny/a"];
const TEST_SECONDS = 25 * 60;

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const fmt = (s) => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
const letters = (list) => (list.length ? [...list].sort().map((x) => LETTERS[x]).join(",") : "brak");

const phase = ref("menu"); // menu | quiz | result
const mode = ref("test");
const qs = ref([]);
const i = ref(0);
const picked = ref([]);
const conf = ref([]);
const notes = ref([]);
const locked = ref(false);
const left = ref(TEST_SECONDS);
const gnote = ref("");
const copied = ref(false);
let t0 = 0;
let timer = null;

const q = computed(() => qs.value[i.value]);
const multi = computed(() => q.value.a.length > 1);
const isLast = computed(() => i.value === qs.value.length - 1);
const timerText = computed(() =>
  left.value >= 0 ? "Pozostały czas " + fmt(left.value) : "Przekroczono czas o " + fmt(-left.value));

function isCorrect(k) {
  const p = picked.value[k], a = qs.value[k].a;
  return p.length === a.length && a.every((x) => p.includes(x));
}

function start(m) {
  mode.value = m;
  const count = m === "test" ? 25 : PYTANIA.length;
  qs.value = shuffle(PYTANIA).slice(0, count).map((p) => {
    const order = shuffle(p.o.map((_, idx) => idx));
    return { ...p, o: order.map((idx) => p.o[idx]), a: p.a.map((x) => order.indexOf(x)) };
  });
  i.value = 0;
  picked.value = qs.value.map(() => []);
  conf.value = qs.value.map(() => 0);
  notes.value = qs.value.map(() => "");
  locked.value = false;
  left.value = TEST_SECONDS;
  gnote.value = "";
  t0 = Date.now();
  phase.value = "quiz";
  clearInterval(timer);
  if (m === "test") timer = setInterval(() => left.value--, 1000);
}

function toggle(idx) {
  if (locked.value) return;
  const p = picked.value[i.value];
  if (!multi.value) picked.value[i.value] = [idx];
  else picked.value[i.value] = p.includes(idx) ? p.filter((x) => x !== idx) : [...p, idx];
}

function next() {
  if (mode.value === "practice" && !locked.value) { locked.value = true; return; }
  locked.value = false;
  if (isLast.value) return finish();
  i.value++;
  window.scrollTo({ top: 0 });
}

function finish() {
  clearInterval(timer);
  phase.value = "result";
  copied.value = false;
  window.scrollTo({ top: 0 });
}

function confirmFinish() { if (confirm("Zakończyć test?")) finish(); }

const total = computed(() => qs.value.length);
const score = computed(() => qs.value.filter((_, k) => isCorrect(k)).length);
const pct = computed(() => Math.round((100 * score.value) / total.value));
const calib = computed(() =>
  [3, 2, 1, 0].map((c) => {
    const ks = qs.value.map((_, k) => k).filter((k) => conf.value[k] === c);
    return ks.length ? `${CONF[c]}: ${ks.filter(isCorrect).length}/${ks.length} poprawnie` : null;
  }).filter(Boolean).join(" · "));

const exportText = computed(() => {
  if (phase.value !== "result") return "";
  const secs = Math.round((Date.now() - t0) / 1000);
  const out = [
    `Wyniki: kolokwium 1 z Transmisji Danych (${mode.value === "test" ? "test na czas" : "ćwiczenia"})`,
    `Wynik: ${score.value}/${total.value} (${pct.value}%), czas: ${fmt(secs)}`,
    "Pewność: 1 = zgaduję, 2 = chyba tak, 3 = pewny/a",
    "",
  ];
  qs.value.forEach((qq, k) => {
    const ok = isCorrect(k);
    const c = conf.value[k];
    const note = notes.value[k].trim();
    out.push(`${k + 1}. [${ok ? "OK" : "BŁĄD"}, pewność ${c || "-"}] ${qq.q}`);
    if (ok && c === 3 && !note) return;
    qq.o.forEach((t, idx) => out.push(`   ${LETTERS[idx]}) ${t}`));
    out.push(`   Moja odpowiedź: ${letters(picked.value[k])}; poprawna: ${letters(qq.a)}`);
    if (note) out.push(`   Moja uwaga: ${note.replace(/\n+/g, " ")}`);
  });
  const g = gnote.value.trim();
  if (g) out.push("", `Wiadomość ogólna: ${g}`);
  const sure = qs.value.map((_, k) => k).filter((k) => conf.value[k] === 3);
  const sureBad = sure.filter((k) => !isCorrect(k)).length;
  out.push("", `Pewny/a i błąd: ${sureBad} z ${sure.length}. Proszę o wskazanie luk w wiedzy i tego, co powtórzyć.`);
  return out.join("\n");
});

async function copy() {
  try {
    await navigator.clipboard.writeText(exportText.value);
  } catch {
    const ta = document.getElementById("export");
    ta.select();
    document.execCommand("copy");
  }
  copied.value = true;
}

const reviewAnswer = (k) => {
  const qq = qs.value[k];
  return qq.a.length === 1 ? `${qq.o[qq.a[0]]} — ${qq.e}` : qq.e;
};

onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <section v-if="phase === 'menu'" class="card">
    <h2>Wybierz tryb</h2>
    <p>Pula: {{ PYTANIA.length }} pytań. Pytania i odpowiedzi są losowo mieszane.</p>
    <div class="row">
      <button @click="start('test')">Test na czas: 25 pytań, 25 min</button>
      <button class="secondary" @click="start('practice')">Ćwiczenia: odpowiedź po każdym pytaniu</button>
    </div>
    <p class="muted">Test: bez cofania, wynik na końcu. Zaznaczenie „wszystkich” liczy się tylko przy dokładnym trafieniu.</p>
  </section>

  <section v-else-if="phase === 'quiz'" class="card">
    <div class="bar">
      <span>Pytanie {{ i + 1 }}/{{ total }}</span>
      <span v-if="mode === 'test'">{{ timerText }}</span>
      <button class="secondary small" @click="confirmFinish">Zakończ</button>
    </div>
    <p class="muted">{{ multi ? "Zaznacz wszystkie prawidłowe odpowiedzi." : "Zaznacz jedyną prawidłową odpowiedź." }}</p>
    <h2 class="question">{{ q.q }}</h2>

    <label v-for="(text, idx) in q.o" :key="i + '-' + idx" class="answer"
           :class="{ ok: locked && q.a.includes(idx), bad: locked && !q.a.includes(idx) && picked[i].includes(idx) }">
      <input :type="multi ? 'checkbox' : 'radio'" name="a" :checked="picked[i].includes(idx)"
             :disabled="locked" @change="toggle(idx)">
      <b>{{ LETTERS[idx] }}</b>
      <span>{{ text }}</span>
    </label>

    <div class="conf">
      <span>Pewność:</span>
      <label v-for="(t, c) in ['zgaduję', 'chyba tak', 'pewny/a']" :key="c">
        <input type="radio" :name="'conf' + i" :value="c + 1" v-model="conf[i]" :disabled="locked"> {{ t }}
      </label>
    </div>
    <textarea v-model="notes[i]" rows="2" class="note"
              placeholder="Dodatkowa wiadomość do tego pytania (opcjonalnie), np. czego nie rozumiem"></textarea>
    <p v-if="locked" class="explain">{{ q.e }}</p>
    <button class="block-mobile" @click="next">{{ mode === "practice" && !locked ? "Sprawdź" : isLast ? "Zakończ" : "Dalej" }}</button>
  </section>

  <section v-else class="card">
    <h2>Wynik: {{ score }} / {{ total }} ({{ pct }}%)</h2>
    <p class="muted">{{ calib }}</p>
    <h3>Wiadomość ogólna (opcjonalnie)</h3>
    <textarea v-model="gnote" rows="3" placeholder="Np. z czym mam największy problem, co mam powtórzyć przed jutrem"></textarea>
    <h3>Wyniki do wklejenia czatowi</h3>
    <textarea id="export" :value="exportText" readonly rows="12" class="mono"></textarea>
    <div class="row">
      <button @click="copy">{{ copied ? "Skopiowano ✓" : "Kopiuj wyniki" }}</button>
      <button class="secondary" @click="phase = 'menu'">Jeszcze raz</button>
    </div>
    <h3>Przegląd</h3>
    <ol class="review">
      <li v-for="(qq, k) in qs" :key="k" :class="isCorrect(k) ? 'ok' : 'bad'">
        <div class="rq">{{ qq.q }}</div>
        <div>Twoja odpowiedź: {{ letters(picked[k]).replace(/,/g, ", ") }} · Poprawna: {{ letters(qq.a).replace(/,/g, ", ") }}</div>
        <div class="re">{{ reviewAnswer(k) }}</div>
      </li>
    </ol>
  </section>
</template>
