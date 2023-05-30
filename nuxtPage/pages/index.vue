<template>
    <div style="background-image: url('../MotivationalPicture.jpg');">
        <div class="container mx-auto p-4 flex flex-col gap-32">
            <h2 class="mb-20xp text-3xl mx-auto p-4 flex justify-center">Motivational quotes</h2>
            <p>{{ quotes[number] }}</p>
            <button class="mx-auto text-xl flex bg-green-300 px-8 py-2 text-white rounded-3xl" onclick="rng()" >Get motivated</button>
        </div>
    </div>
</template>

<script setup>
//Setting variables
    let number;
    let quotes = [];
//Random number function
    function rng(){
        number = Math.floor(Math.random() * 202);
        console.log(number)
    }
//Fetching data
    async function fetchData() {
      quotes = await (await fetch('http://localhost:5000')).json();
      console.log(quotes);
    }
    rng()
    fetchData();
</script>

<style scoped>

</style>