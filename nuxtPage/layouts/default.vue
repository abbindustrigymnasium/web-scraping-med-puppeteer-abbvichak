<template>
    <div>
        <header class="shadow-sm bg-white ">
            <nav class="container mx-auto p-4 flex justify-between">
                <h4 class="font-bold">QuotePage</h4>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/quotes">Quotes</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <content class="container mx-auto p-4">
            <slot />
        </content>
    </div>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>