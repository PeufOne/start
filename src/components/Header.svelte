
<script>
    import { AppBar, Button, Icon } from 'svelte-materialify'
    import isDarkTheme from '$/theme.js'

    export let offsetHeight

</script>

<div bind:offsetHeight>
    <AppBar>

        <span slot="title">Header</span>
        
        <div style="flex-grow: 1;"/>

        <Button fab depressed outlined={$isDarkTheme} disabled={$isDarkTheme} on:click={() => $isDarkTheme = true}>
            <Icon class="far fa-moon" />
        </Button>
        <Button fab depressed outlined={!$isDarkTheme} disabled={!$isDarkTheme} on:click={() => $isDarkTheme = false}>
            <Icon class="fas fa-sun" />
        </Button>

    </AppBar>
</div>
