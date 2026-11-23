<script setup>
import html from "../content/notatki.html?raw";
</script>

<template>
  <section class="card notes" v-html="html"></section>
</template>
