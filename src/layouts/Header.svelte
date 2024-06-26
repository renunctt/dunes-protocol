<script lang="ts">
	import arrowBottomIcon from '../assets/images/icons/arrow-bottom.svg'
	import Logo from '../components/ui/Logo.svelte'
	import swapIcon from '../assets/images/nav/swap.svg'
	import bridgeIcon from '../assets/images/nav/bridge.svg'
	import galleryIcon from '../assets/images/nav/gallery.svg'
	import launchpadIcon from '../assets/images/nav/launchpad.png'
	import stakingIcon from '../assets/images/nav/staking.svg'
	import { Link } from 'svelte-routing'
	import closeIcon from '../assets/images/icons/close.svg'

	const incubationItems = [
		{ text: 'Dune Swap', link: '/swap', icon: swapIcon },
		{ text: 'Dune Bridge', link: '/bridge', icon: bridgeIcon },
		{ text: 'Dunes Gallery', link: '/gallery', icon: galleryIcon },
	]

	const protocolItems = [
		{ text: 'IDO Launchpad', link: '/ido-launchpad', icon: launchpadIcon },
		{ text: 'INO Launchpad', link: '/ino-launchpad', icon: launchpadIcon },
		{ text: 'Staking', link: '/staking', icon: stakingIcon },
	]

	let isActive = false

	function toggleBurger() {
		isActive = !isActive
	}
</script>

<header class="header">
	<div class="container">
		<Logo />

		<nav class="nav">
			<button class="item incubation-link">
				<div class="incubation">
					{#each incubationItems as item}
						<div class="link">
							<Link to={item.link}>
								<img src={item.icon} alt="" />
								{item.text}
							</Link>
						</div>
					{/each}
				</div>
				<span>Incubation</span>
				<img src={arrowBottomIcon} alt="icon" />
			</button>
			<button class="item protocol-link">
				<div class="protocol">
					{#each protocolItems as item}
						<div class="link">
							<Link to={item.link}>
								<div class="link-item">
									<img src={item.icon} alt="" />
									<span>{item.text}</span>
								</div>
							</Link>
						</div>
					{/each}
				</div>
				<span>Protocol</span>
				<img src={arrowBottomIcon} alt="icon" />
			</button>
		</nav>

		<div class="connect-box">
			<button class="connect">Connect wallet</button>
		</div>

		<button on:click={toggleBurger} class="burger">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</header>
{#if isActive}
	<div class="menu">
		<button on:click={toggleBurger} class="menu-close">
			<img src={closeIcon} alt="close" />
		</button>
		<div class="menu-item">Incubation</div>
		<div class="menu-list">
			{#each incubationItems as item}
				<Link to={item.link}>
					<div class="menu-link">
						<img src={item.icon} alt="" />
						{item.text}
					</div>
				</Link>
			{/each}
		</div>

		<div class="menu-item">Protocol</div>
		<div class="menu-list">
			{#each protocolItems as item}
				<Link to={item.link}>
					<div class="menu-link">
						<img src={item.icon} alt="" />
						{item.text}
					</div>
				</Link>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../assets/styles/variables';

	.menu {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: $second-bg-color;
		z-index: 1000;
		align-items: start;
		padding-top: 50px;
	}

	.menu-list {
		margin-left: 100px;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 10px;
	}

	.menu-link {
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 10px;
		font-size: 20px;
		padding: 10px 0;
	}

	.menu-item {
		margin-left: 100px;

		font-size: 26px;
		font-weight: 500;
	}

	.menu-close img {
		position: absolute;
		right: 20px;
		top: 20px;
		width: 40px;
	}

	.burger {
		@include flex-center;
		flex-direction: column;
		gap: 10px;
		margin-left: auto;
		display: none;
		span {
			width: 40px;
			height: 2px;
			background-color: #fff;
		}
	}

	.incubation {
		font-family: 'B612 Mono', $font-stack;
		font-size: 14px;
		font-weight: 500;
		width: 192px;
		position: fixed;
		display: none;
		flex-direction: column;
		top: 100px;
		transform: translateX(-1px);

		.link {
			padding: 30px 0 30px 26px;
			@include flex;
			justify-content: start;
			gap: 17px;
			background: rgba(30, 30, 30, 0.7);
			backdrop-filter: blur(10px);
			border: $border-line;
		}
	}

	.link-item {
		padding: 30px 0 30px 26px;
		@include flex-center;
		gap: 9px;
	}

	.protocol {
		font-family: 'B612 Mono', $font-stack;
		font-size: 14px;
		font-weight: 500;
		width: 193px;
		position: fixed;
		display: none;
		flex-direction: column;
		top: 100px;
		transform: translateX(-1px);

		.link {
			@include flex;
			justify-content: start;
			gap: 17px;
			background: rgba(30, 30, 30, 0.7);
			backdrop-filter: blur(10px);
			border: $border-line;
		}
	}

	.header {
		position: fixed;
		width: 100%;
		height: 100px;
		background-color: $primary-bg-color;
		border-bottom: $border-line;
		z-index: 100;

		.container {
			position: relative;
			height: 100%;
			@include flex-center;
		}
	}

	.nav {
		height: 100%;
		@include flex-center;
		margin-left: 68px;
		border-left: $border-line;
		border-right: $border-line;

		.item {
			font-family: 'B612 Mono', $font-stack;
			font-size: 14px;
			font-weight: 500;
			width: 191px;
			height: 100%;
		}

		.item:first-child {
			border-right: $border-line;
		}
	}

	.connect-box {
		height: 100%;
		@include flex-center;
		margin-left: auto;
		padding-left: 41px;
		border-left: $border-line;
	}

	.connect {
		font-size: 12px;
		text-transform: uppercase;
		width: 150px;
		height: 40px;
		background-image: url('../assets/images/frames/header-frame.svg');
		background-repeat: no-repeat;
	}

	.incubation-link:hover .incubation {
		display: flex;
	}
	.protocol-link:hover .protocol {
		display: flex;
	}

	@media (max-width: 450px) {
		.header {
			height: 70px;
		}
		.nav {
			display: none;
		}

		.connect-box {
			display: none;
		}
		.burger {
			display: flex;
		}
	}
</style>
