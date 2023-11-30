<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let type: "down" | "up" = "down"
    let dispatch = createEventDispatcher()
</script>

<button  on:click={() => dispatch(type)} class:up={type === 'up'} class:down={type === 'down'} ></button>


<style>

    .down::before {
        animation: bounce 1s ease infinite;
        color: #8d8d8d;
        content: '╲╱';
        font-size: 1.2rem;
        height: 4rem;
        bottom: 1px;
        right: 96vh;
        letter-spacing: -1px;
        line-height: 4rem;
        margin-left: -3rem;
 
        position: absolute;
        text-align: center;
        width: 6rem;
    }
    .up::before {
        position: absolute;
        transform: rotateX(-180deg);
        animation: up 1s ease infinite;

        color: #8d8d8d;
        content: '╲╱';
        font-size: 1.2rem;
        height: 4rem;
        right: 96vh;
        top: 0vh;
        letter-spacing: -1px;
        line-height: 4rem;


        text-align: center;
        width: 6rem;
        
    }

    .up:hover, .down:hover {
        text-shadow: 0px 0px 15px rgba(10, 10, 20); 
    }

    @keyframes bounce {
        50% {
            transform: translateY(-20%);
        }
    }

    @keyframes up {
        50% {
            
            top: 2vh
            
        }
    }

</style>