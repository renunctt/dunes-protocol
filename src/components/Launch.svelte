<script lang="ts">
	import arrowIcon from '../assets/images/icons/arrow-green-featured.svg'
	import heroImage from '../assets/images/hero/launch-hero.png'
	import decorImage from '../assets/images/decor/ancient-desert.png'
	import { onMount } from 'svelte'

	// import runeIcon1 from "../assets/images/runes/rune-1.svg"
	// import runeIcon2 from "../assets/images/runes/runes-2.png"
	// import runeIcon3 from "../assets/images/runes/runes-3.png"
	// import runeIcon4 from "../assets/images/runes/runes-4.png"
	// import runeIcon5 from "../assets/images/runes/runes-5.png"
	// import runeIcon6 from "../assets/images/runes/runes-6.png"
	// import runeIcon7 from "../assets/images/runes/runes-7.png"
	// import runeIcon8 from "../assets/images/runes/runes-8.png"

	// const runes = [runeIcon1, runeIcon2, runeIcon3, runeIcon4, runeIcon5, runeIcon6, runeIcon7, runeIcon8]

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

<section>
	<div class="container">
		<div class="left">
			<div class="top"></div>

			<div class="left-top-line"></div>
			<div class="left-top2-line"></div>

			<div class="title">
				Aiming for successful token listing?
				<img src={arrowIcon} alt="icon" />
			</div>
			<div class="left-top2-line"></div>

			<p class="description">Launch on Dunes Platform</p>
			<button class="btn">Apply for IDO</button>
			<div class="left-bottom-line"></div>

			<div class="bottom"></div>
		</div>

		<div class="hero">
			<img src={heroImage} alt="hero" />
		</div>

		<div
			class="decor"
			style="transform: translate({(-mouseX / window.innerWidth) *
				50}%, {(-mouseY / window.innerHeight) * 50}%);"
		>
			<img src={decorImage} alt="decor" />
		</div>

		<div class="right">
			<div class="right-line">
				<!-- {#each runes as rune, index}
					<img src={rune} alt="" class="runes-{index}">
				{/each} -->
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../assets/styles/variables';

	.right {
		position: relative;
		width: 190px;
		height: 732px;
		border-left: $border-line;
		border-right: $border-line;
		z-index: 20;
	}

	.right-line img {
		position: relative;
		z-index: 20;
	}

	section {
		.container {
			position: relative;
			display: flex;
			justify-content: space-between;
		}
	}

	.left {
		position: relative;
		z-index: 10;
	}

	.top {
		width: 193px;
		height: 132px;
		border-left: $border-line;
		border-right: $border-line;
	}

	.title {
		display: flex;
		width: 594px;
		font-size: 52px;
		font-weight: 500;
		padding: 20px 0 30px;

		img {
			position: relative;
			top: -75px;
			left: -24px;
			transform: rotate(180deg);
		}
	}

	.description {
		padding-top: 43px;
		font-size: 28px;
		font-weight: 500;
		opacity: 0.7;
	}

	.btn {
		font-family: 'B612 Mono', $font-stack;
		font-size: 20px;
		text-transform: uppercase;
		@include flex-center;
		width: 225px;
		height: 58px;
		margin-top: 64px;
		background-image: url('../assets/images/frames/main-frame.svg');
		background-repeat: no-repeat;
		background-size: contain;
		margin-bottom: 66px;
	}

	.bottom {
		width: 193px;
		height: 161px;
		border-left: $border-line;
		border-right: $border-line;
	}

	.left-top-line {
		position: absolute;
		width: 1px;
		height: 800px;
		background-color: rgba($color: #ffffff, $alpha: 0.25);
		left: 570px;
	}
	.left-top2-line {
		position: absolute;
		width: 3000px;
		height: 1px;
		background-color: rgba($color: #ffffff, $alpha: 0.25);
		left: -2430px;
	}

	.left-bottom-line {
		position: absolute;
		width: 2000px;
		height: 1px;
		background-color: rgba($color: #ffffff, $alpha: 0.25);
		left: -1430px;
		top: 570px;
	}

	.hero {
		border-radius: 50%;
	}

	.hero img {
		position: absolute;
		max-height: 1000px;
		top: -60px;
		left: 140px;
		object-fit: cover;
		mask-image: linear-gradient(
			to right,
			transparent 1%,
			transparent 4%,
			black 50%,
			black 90%,
			transparent 100%
		);
	}

	.decor {
		position: absolute;
		top: 200px;
		left: 450px;
	}

	@media (max-width: 450px) {
		.left {
			width: 100%;
		}
		.title {
			font-size: 30px;
			width: 100%;
		}

		.right {
			display: none;
		}
	}
</style>
