<script lang="ts">
	import { Router, Route } from 'svelte-routing'
	import Home from './routes/Home.svelte'
	import Header from './layouts/Header.svelte'
	import Footer from './layouts/Footer.svelte'

	export let url = ''
</script>

<Router {url}>
	<Header />
	<div class="route">
		<Route path="/dunes-protocol"><Home /></Route>
	</div>
	<Footer />
</Router>

<style lang="scss">
	.route {
		margin-top: 100px;
	}
	@media (max-width: 450px) {
		.route {
			margin-top: 70px;
		}
	}
</style>
