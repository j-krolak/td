# TD – kolokwium 1

Strona do nauki na kolokwium z Transmisji Danych: testy, fiszki i notatki. Vue 3 + Vite, responsywna (działa na telefonie).

> 🤖 **100% vibecoded.** Cały kod i treść zostały wygenerowane przez AI. Nic nie było pisane ręcznie, a treść może zawierać błędy — weryfikuj z materiałami z wykładów.

## Struktura

- `src/views/QuizView.vue` – testy (tryb na czas i ćwiczenia)
- `src/views/FlashView.vue` – fiszki (postęp w `localStorage`)
- `src/views/NotesView.vue` – notatki (`src/content/notatki.html`)
- `src/data/` – pytania i fiszki

## Development

```sh
npm install
npm run dev      # serwer deweloperski
npm run build    # produkcja w dist/
```

## Publikacja

```sh
npm run deploy   # build + gh-pages -d dist (push do gałęzi gh-pages)
```

W repo: Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/ (root)`. Routing jest hashowy, więc działa pod dowolną nazwą repo.
