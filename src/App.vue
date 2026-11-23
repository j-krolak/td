<template>
  <header>
    <h1>TD – Kolokwium 1</h1>
    <nav>
      <RouterLink to="/">Testy</RouterLink>
      <RouterLink to="/fiszki">Fiszki</RouterLink>
      <RouterLink to="/notatki">Notatki</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive><component :is="Component" /></KeepAlive>
    </RouterView>
  </main>
</template>
