<script>

    import FadeDecorator from '$/FadeDecorator.svelte'

</script>

<main>
    <slot decorator={FadeDecorator}/>
</main>

<style>
    main {
        width: 600px;
        margin: auto;
        border: solid 2px #ccc;
        border-radius: 10px;
        padding: 50px;
        transform: translateY(50px);
    }
</style>