<script>
    import { MaterialApp } from 'svelte-materialify'
    import { Router } from '@roxi/routify'
    import { routes } from '../.routify/routes.js'
</script>

<MaterialApp theme="light" style="height: 100%;">
    <Router {routes} />
</MaterialApp>

