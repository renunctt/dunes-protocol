<script lang="ts">
	import arrowBottomIcon from '../assets/images/icons/arrow-bottom.svg'
	import Logo from '../components/ui/Logo.svelte'
	import swapIcon from '../assets/images/nav/swap.svg'
	import bridgeIcon from '../assets/images/nav/bridge.svg'
	import galleryIcon from '../assets/images/nav/gallery.svg'
	import launchpadIcon from '../assets/images/nav/launchpad.png'
	import stakingIcon from '../assets/images/nav/staking.svg'
</script>

<header class="header">
	<div class="container">
		<Logo />

		<nav class="nav">
			<button class="item incubation-link">
				<div class="incubation">
					<a href="#" class="link">
						<img src={swapIcon} alt="" />
						Dune Swap
					</a>
					<a href="#" class="link">
						<img src={bridgeIcon} alt="" />
						Dune Bridge
					</a>
					<a href="#" class="link">
						<img src={galleryIcon} alt="" />
						Dunes Gallery
					</a>
				</div>
				<span>Incubation</span>
				<img src={arrowBottomIcon} alt="icon" />
			</button>
			<button class="item protocol-link">
				<div class="protocol">
					<a href="#" class="link">
						<img src={launchpadIcon} alt="" />
						IDO Launchpad
					</a>
					<a href="#" class="link">
						<img src={launchpadIcon} alt="" />
						INO Launchpad
					</a>
					<a href="#" class="link">
						<img src={stakingIcon} alt="" />
						Staking
					</a>
				</div>
				<span>Protocol</span>
				<img src={arrowBottomIcon} alt="icon" />
			</button>
		</nav>

		<div class="connect-box">
			<button class="connect">Connect wallet</button>
		</div>

		<button class="burger">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<style lang="scss">
	@import '../assets/styles/variables';

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
			padding: 30px 0 30px 26px;
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
		margin-left: 69px;
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
