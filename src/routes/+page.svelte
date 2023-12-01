<script lang='ts'>
    import Indicator from "$lib/indicator.svelte";
    import Login from "$lib/login.svelte";
    import PostCard from "$lib/post-card.svelte";


    let show = true
    interface PageLoad {
        posts: {
            liked: boolean,
            owner: string,
            content: string
        }[]
    }
    export let data: PageLoad;

    let posts = data.posts
    let cur = 0

    let loggedin = false

    async function login(e: CustomEvent<any>) {
        let res = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                email: e.detail.email,
                password: e.detail.password,
                type: e.detail.type
            }),
            headers: {
				'content-type': 'application/json',
			},      
        })

        let json = await res.json()

        if (json.data) {
            loggedin = true
        }

        let posts_res = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                email: e.detail.email,
                password: e.detail.password,
                type: "posts"
            }),
            headers: {
				'content-type': 'application/json',
			},      
        })

        let post_json = await posts_res.json()
        console.log(json, post_json)
        posts = post_json.posts
    }

</script>

{#if !loggedin}
    <Login on:login={login}/>    

{:else}
    <Indicator on:down={() => { cur = (cur + 1) % posts.length; posts = posts }} />
    <Indicator type="up" on:up={() =>  { cur = (cur <= 0 ? cur = posts.length-1 : cur - 1) % posts.length; posts = posts }} />
            
    <PostCard liked={posts[cur].liked} {show} userName={posts[cur].owner} on:like={() => {
        posts[cur].liked = !posts[cur].liked
        posts = posts 
    }} content={posts[cur].content}></PostCard>
{/if}


<style>
    :global(body) {
        overflow: hidden;
        background: rgb(209 213 223);
    }
</style>