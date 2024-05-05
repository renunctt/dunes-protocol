<script lang="ts">
	import arrowIcon from '../assets/images/icons/arrow-green.svg'
	import bitcoinIcon from '../assets/images/icons/bitcoin.svg'
	import circleImage from '../assets/images/icons/circle.png'
	import logo1 from '../assets/images/logos/1.png'
	import logo2 from '../assets/images/logos/2.png'
	import logo3 from '../assets/images/logos/3.png'
	import logo4 from '../assets/images/logos/4.png'
	import logo5 from '../assets/images/logos/5.png'
	import logo6 from '../assets/images/logos/6.png'
	import { onMount } from 'svelte'

	const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

	let scrollPosition = 1
	const scrollSpeed = 0.6

	onMount(() => {
		const container = document.querySelector('.run')
		const containerWidth = container?.offsetWidth

		setInterval(() => {
			scrollPosition += scrollSpeed
			if (scrollPosition >= containerWidth) {
				scrollPosition = 0
			}
		}, 1000 / 60)
	})

</script>

<section>
	<div class="container">
		<div class="content">
			<p class="title">
				<span>Trusted by</span>
				<img src={arrowIcon} alt="arrow" />
			</p>

			<div class="blur-left"></div>

			<div class="run">
				{#each logos as logo}
					<img
						src={logo}
						alt="Логотип"
						class="logo"
						style="transform: translateX({-scrollPosition}px);"
					/>
				{/each}
				{#each logos as logo}
					<img
						src={logo}
						alt="Логотип"
						class="logo"
						style="transform: translateX({-scrollPosition}px);"
					/>
				{/each}
			</div>
		</div>
		<div class="blur-right"></div>

		<div class="right">
			<img class="bit" src={bitcoinIcon} alt="" />
			<div class="circle">
				<img src={circleImage} alt="" />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../assets/styles/variables';

	section {
		border-top: $border-line;
		border-bottom: $border-line;

		.container {
			height: 100%;
			@include flex-center;
			position: relative;
		}
	}

	.blur-left {
		position: absolute;
		height: 100px;
		width: 70px;
		top: 60px;
		left: -10px;
		background: #0b0b0e;
		filter: blur(10px);
		z-index: 10;
	}

	.blur-right {
		position: absolute;
		height: 100px;
		width: 100px;
		top: 60px;
		left: 870px;
		background: #0b0b0e;
		filter: blur(10px);
		z-index: 10;
	}

	.run {
		width: 900px;
		overflow: hidden;
		white-space: nowrap;
	}
	.logo {
		display: inline-block;
		margin-right: 20px; /* Расстояние между логотипами */
	}

	.content {
		padding: 26px 0 68px;
	}

	.title {
		@include flex;
		gap: 14px;
		margin-bottom: 27px;

		span {
			@include second-font;
		}
	}

	.right {
		height: 203px;
		padding-left: 16px;
		padding-right: 20px;
		@include flex-center;
		margin-left: auto;
		border-left: $border-line;

		.bit {
			width: 47px;
			position: relative;
			left: 78px;
		}
	}

	.circle {
		@include flex-center;

		img {
			width: 108px;
			height: 108px;
			background-repeat: no-repeat;
			animation: rotate 15s linear infinite;
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 450px) {
		section {

		.container {
			max-height: 88px;
		}
		}

		.title {
			position: relative;
			top: -36px;
			left: -10px;
			text-align: center;
			justify-content: center;

			span {
				font-size: 14px;
			}
		}

		.run {
			position: relative;
			top: -30px;
		}

		.blur-left {
			top: -4px;
			left: -30px;
		}

		.blur-right {
			top: -4px;
			width: 200px;
			left: 320px;
		}

		.right {
			position: relative;
			top: -92px;
			left: -318px;
			border: none;
			margin: 0;
			padding-right: 60px;

			.circle {
				img {
					width: 80px;
				height: 80px;
				}
				
			}

			.bit {
				width: 35px;
				position: relative;
				left: 59px;
			}
		}

		.content {
			padding-bottom: 0;
		}
	}
</style>
