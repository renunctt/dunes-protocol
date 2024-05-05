<script lang="ts">
	import heroBg from '../assets/images/hero/home-hero.png'
	import coinIcon from '../assets/images/decor/moss-coin-1.png'
	import { onMount } from 'svelte'

	let mouseX = 0
	let mouseY = 0
	const coefficient = 0.1

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove)
	})

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX * coefficient
		mouseY = event.clientY * coefficient
	}
</script>

<main class="main">
	<div class="container">
		<div class="content">
			<h1 class="title">
				Join the most innovative <span>launchpad</span> of 2024
			</h1>

			<p class="paragraph">
				Platform forged from Sands of ancient desert to provide incubation to
				Innovations on Runes protocol
			</p>

			<div class="btn-box">
				<button class="btn-buy">buy $DUNES</button>
				<button class="btn-get">Get started</button>
			</div>

			<div class="hero-bg">
				<img src={heroBg} alt="bg" />
			</div>
		</div>

		<div
			class="coin"
			style="transform: translate({(-mouseX / window.innerWidth) *
				50}%, {(-mouseY / window.innerHeight) * 50}%);"
		>
			<img src={coinIcon} alt="moss coin" />
		</div>
	</div>
</main>

<style lang="scss">
	@import '../assets/styles/variables';

	.main {
		height: 534px;
		.container {
			display: flex;
		}
	}

	.content {
		margin-top: 92px;
		position: relative;
	}

	.title {
		max-width: 729px;
		font-weight: 500;
		font-size: 60px;

		span {
			background: -webkit-linear-gradient(#007227, #81d100, #ffe924);
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	.paragraph {
		margin-top: 32px;
		font-size: 20px;
		color: rgba($color: $primary-color, $alpha: 0.8);
	}

	.btn-box {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-top: 64px;

		button {
			@include flex-center;
			font-family: 'B612 Mono', $font-stack;
			text-transform: uppercase;
			font-size: 20px;
			width: 183px;
			height: 47px;
			background-repeat: no-repeat;
		}
	}

	.btn-buy {
		background-image: url('../assets/images/frames/main-frame.svg');
	}

	.btn-get {
		background-image: url('../assets/images/frames/main-frame-gray.svg');
	}

	.coin {
		position: relative;
		margin-top: 20px;
		z-index: 10;
		transition: transform 0.2s ease; 
	}

	.hero-bg {
		position: absolute;
		top: -90px;
		left: 330px;
		z-index: -1;
		width: 100%;
	}

	@media (max-width: 450px) {
		.main {
			height: 630px;
		}
		.content {
			width: 100%;
			margin-top: 32px;
		}
		.title {
			width: 100%;
			text-align: start;
			font-size: 32px;
		}

		.paragraph {
			text-align: start;
			font-size: 18px;
		}

		.hero-bg {
			
			top: 300px;
			left: -40px;
		}

		.hero-bg img {
			max-width: 460px;
		}

		.coin {
			top: 315px;
			left: -278px;
		}

		.coin img {
			width: 250px;
		}

		.btn-box {
			margin-top: 42px;

			button {
				width: 162px;
				height: 41px;
				background-size: cover;

				font-size: 17px;
			}
		}
	}
</style>
