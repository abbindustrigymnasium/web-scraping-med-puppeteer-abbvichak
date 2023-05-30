<template>
    <div>
        <ul class="container p-4 flex flex-col justify-center text-xl">
            <li v-for="quote in quotes">{{ quote }}</li>
        </ul>
    </div>
</template>

<script setup>
//Fetching data
  let quotes = [];

  async function fetchData() {
    quotes = await (await fetch('http://localhost:5000')).json();
    console.log(quotes);
  }

  fetchData();
</script>

<style scoped>

</style>