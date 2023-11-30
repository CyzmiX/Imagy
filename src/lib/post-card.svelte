<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { blur, draw, scale } from "svelte/transition";

    export let liked = false
    export let content: string = ''
    export let userName: string = ''
    export let show = true
    let dispatch = createEventDispatcher()

</script>

{#if show}
    <div class="text-center min-h-screen flex items-center overflow-hidden py-20">
        <div in:blur out:scale class="container overflow-hidden mx-auto max-w-sm bg-white rounded-xl shadow-2xl shadow-gray-500 hover:scale-[1.05] hover:border-blue-200 hover:border hover:shadow-xl transform transition-all duration-500">
        <div class="flex items-center justify-between px-4">
        <div class="flex justify-between items-center py-4">
            <img class="w-12 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Alex" />
            <div class="ml-3">
            <p class="text-xl font-bold text-gray-800">{ userName }</p>

            </div>
        </div>

        </div>
        <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="">
        <div class="inline-flex gap-16 p-6">
        <h2 class="text-center text-lg text-gray-800 font-semibold">{content}</h2>
        <button on:click={() => dispatch("like")}>
            {#if liked}            
                <svg in:scale class="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                </svg>
            {:else}
                <svg in:scale class="text-red-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/>
                </svg>
            {/if}
        </button>

        </div>
        </div>
    </div>
{/if}