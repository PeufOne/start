<script>
    import { page } from '@roxi/routify'
    import { MaterialApp } from 'svelte-materialify'
    import FadeDecorator from '$/FadeDecorator.svelte'
    import Header from '$/Header.svelte'
    import Footer from '$/Footer.svelte'
    import isDarkTheme from '$/theme.js'

    let innerHeight = 0 	// Window height
	let headHeight = 0		// Header height
	let mainHeight = 0		// Main content height
	let footerHeight = 0 	// Footer height
    $: {
		mainHeight = innerHeight - headHeight
		if ($page.meta.isFooterDisplay) mainHeight -= footerHeight
        console.log('asd', mainHeight, innerHeight, headHeight, footerHeight)
	}

</script>

<svelte:window bind:innerHeight/>

<div style={`min-height: ${innerHeight}px;`}>
    <MaterialApp theme={$isDarkTheme ? 'dark' : 'light'}>

        <Header bind:offsetHeight={headHeight}/>

        <div style="min-height: {mainHeight}px;">
            <slot decorator={FadeDecorator} scoped={{headHeight, footerHeight, mainHeight}}/>
        </div>

        {#if $page.meta.isFooterDisplay}
			<Footer bind:offsetHeight={footerHeight}/>
		{/if}

    </MaterialApp>

</div>
