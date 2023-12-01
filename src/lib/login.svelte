<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { scale } from "svelte/transition";
    export let type: "login" | "singup" = "login"
    let dispatch = createEventDispatcher()

    let email = '';
    let password = '';

    function login() {
        if (!email || !password) {
            return 
        }
        
        dispatch('login', {
            email,
            password,
            type
        })
    }
</script>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class=" relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="w-[500px] relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
                {#if type === "login"}
    				<div in:scale>
    					<h1 class="text-2xl text-center font-semibold">Welcome Back!</h1>
    				</div>
                {:else}
                    <div in:scale>
                        <h1 class="text-2xl text-center font-semibold">Welcome to Imagy!</h1>
                    </div>
                {/if}
				<form class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input bind:value={email} autocomplete="off" id="email" name="email" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900  focus:border-blue-500 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative ">
							<input bind:value={password} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 focus:border-blue-500 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class=" absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="flex justify-center items-center ">
							<button on:click={login} type="submit" class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-all duration-200">{type==='login' ? 'Login' : "SignUp"}</button>
                        </div>
                        <br/>
                        <div  class="flex justify-center items-center">
                            {#if type === "login"}
                            <h1 class="border-b-2">Dont have an account yet? <button on:click={() =>type = type === "login" ? "singup" : "login"} class="text-blue-600 font-bold s">SignUp!</button></h1>
                            {:else}
                                <h1 class="border-b-2">Already have an account? <button on:click={() =>type = type === "login" ? "singup" : "login"} class="text-blue-600 font-bold s">Log In</button></h1>
                            {/if}
                        </div>
                    </div>  
				</form>

			</div>
		</div>
	</div>
</div>

<style>
    .s {
        text-shadow: 0px 2px 13px lightskyblue;
        transition: all 0.2s ease;
    }
    .s:hover {
        text-shadow: 0px 2px 20px lightseagreen
    }
</style>