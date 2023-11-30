<script lang='ts'>
    import Indicator from "$lib/indicator.svelte";
    import PostCard from "$lib/post-card.svelte";
    let show = true
    export let data;
    console.log(data)
    let posts = data.posts
    let cur = 0

</script>

<Indicator on:down={() => { cur = (cur + 1) % posts.length; posts = posts }} />
<Indicator type="up" on:up={() =>  { cur = (cur <= 0 ? cur = posts.length-1 : cur - 1) % posts.length; posts = posts }} />

    
<PostCard liked={posts[cur].liked} {show} userName={posts[cur].owner} on:like={() => {
    posts[cur].liked = !posts[cur].liked
    posts = posts 
}} content={posts[cur].content}></PostCard>

<style>
    :global(body) {
        overflow: hidden;
        background: rgb(209 213 223);
    }
</style>