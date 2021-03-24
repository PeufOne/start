<script>
    import { Footer } from 'svelte-materialify'

    export let offsetHeight
</script>

<div bind:offsetHeight>
    <Footer>
        <div class="item">
            <h5>Footer</h5>
        </div>
        <div class="item">
            Hey, i'm render because :
            <pre class="green-text">{`<!-- routify:options isFooterDisplay=true -->`}</pre>
        </div>
    </Footer>
</div>

<style>
    
    .item {
        width: 50%;
    }

</style>