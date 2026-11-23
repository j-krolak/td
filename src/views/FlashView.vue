<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { FISZKI } from "../data/fiszki.js";

const KEY = "td_fiszki_known";
const load = () => {
  try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { return new Set(); }
};
const known = ref(load());
const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...known.value])); } catch {} };

const cats = ["Wszystkie", ...new Set(FISZKI.map((c) => c.k))];
const cat = ref("Wszystkie");
const hide = ref(true);
const queue = ref([]);
const cur = ref(undefined);
const flipped = ref(false);

const shuffle = (a) => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const pool = computed(() =>
  FISZKI.map((_, i) => i).filter((i) => cat.value === "Wszystkie" || FISZKI[i].k === cat.value));
const stats = computed(
  () => `Opanowane: ${pool.value.filter((i) => known.value.has(i)).length}/${pool.value.length} · w kolejce: ${queue.value.length}`);
const card = computed(() => (cur.value === undefined ? null : FISZKI[cur.value]));

function next() {
  cur.value = queue.value.shift();
  flipped.value = false;
}
function build() {
  queue.value = shuffle(pool.value.filter((i) => !(hide.value && known.value.has(i))));
  next();
}
function flip() { if (card.value) flipped.value = !flipped.value; }
function mark(ok) {
  if (!card.value || !flipped.value) return;
  if (ok) { known.value.add(cur.value); save(); }
  else queue.value.splice(Math.min(queue.value.length, 4), 0, cur.value);
  next();
}
function reset() {
  if (confirm("Skasować postęp?")) { known.value = new Set(); save(); build(); }
}

function onKey(e) {
  if (["SELECT", "INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
  if (e.code === "Space") { e.preventDefault(); flip(); }
  else if (e.key === "1") mark(false);
  else if (e.key === "2") mark(true);
}
onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => document.removeEventListener("keydown", onKey));
build();
</script>

<template>
  <section class="card">
    <div class="bar">
      <label>Dział:
        <select v-model="cat" @change="build">
          <option v-for="c in cats" :key="c">{{ c }}</option>
        </select>
      </label>
      <label><input type="checkbox" v-model="hide" @change="build"> ukryj opanowane</label>
      <button class="secondary small" @click="reset">Resetuj postęp</button>
    </div>
    <p class="muted">{{ stats }}</p>

    <div v-if="card" class="flash" :class="{ back: flipped }" tabindex="0" role="button"
         aria-label="Odwróć fiszkę" @click="flip" @keydown.enter.prevent="flip">
      <div class="muted">{{ card.k }}</div>
      <div class="face">{{ flipped ? card.b : card.f }}</div>
      <div class="hint muted">dotknij lub Spacja, aby odwrócić</div>
    </div>

    <div v-if="card && flipped" class="row">
      <button class="secondary" @click="mark(false)">Jeszcze raz (1)</button>
      <button @click="mark(true)">Umiem (2)</button>
    </div>
    <p v-if="!card" class="explain">
      Koniec talii w tym dziale. Zmień dział, odznacz „ukryj opanowane” albo zresetuj postęp.
    </p>
  </section>
</template>
