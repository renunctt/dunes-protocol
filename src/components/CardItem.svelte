<script lang="ts">
	import tetherIcon from '../assets/images/card/tether.svg'
	import type { ICard } from '../lib/interfaces'

	export let card: ICard
</script>

<div class="card">
	<div class="top">
		<img src={card.img} alt="bg" class="bg" />
		<img src={card.icon} alt={card.title} />
	</div>

	<h4 class="title">{card.title}</h4>

	<div class="info-top">
		<p class="top-left">TOTAL RAISED</p>
		<p>ATH ROI</p>
	</div>

	<div class="price">
		<p class="price-item">
			<img src={tetherIcon} alt="USDT" />
			{card.price}
		</p>
		<p class="price-percent">{card.percent}</p>
	</div>

	<div class="social">
		{#each card.social as item}
			<a href={item.link} class="link">
				<img src={item.icon} alt={item.alt} />
			</a>
		{/each}
	</div>

	<button class="btn"> More details </button>
</div>

<style lang="scss">
	@import '../assets/styles/variables';

	.card {
		width: 384px;
		border: $border-line;
		border-color: #ffffff;
	}

	.top {
		position: relative;
		@include flex-center;
		border-bottom: $border-line;

		.bg {
			position: absolute;
			width: 100%;
		}

		img {
			position: relative;
			z-index: 10;
		}

		
	}
	.top-left {
			min-width: 193px;
		}

	.title {
		text-align: center;
		padding: 14px;
		font-size: 32px;
		border-bottom: $border-line;
	}

	.info-top {
		@include flex-center;
		height: 50px;
		border-bottom: $border-line;

		p {
			@include flex-center;
			width: 192px;
			font-size: 12px;
			font-weight: 500;
			opacity: 0.7;
			height: 50px;
		}

		.top-left {
			border-right: $border-line;
		}
	}

	.price {
		font-size: 20px;
		@include flex-center;
		height: 84px;
		border-bottom: $border-line;

		.price-item {
			@include flex-center;
			height: 84px;
			min-width: 193px;
			border-right: $border-line;
		}

		.price-percent {
			@include flex-center;
			height: 84px;
			width: 192px;
		}
	}

	.social {
		@include flex-center;
		height: 74px;
		gap: 31px;
		border-bottom: $border-line;

		.link img {
			width: 27px;
		}
	}

	.btn {
		width: 100%;
		@include flex-center;
		padding: 24px 24px;
		font-size: 15px;
		font-family: 'B612 Mono', $font-stack;
		text-transform: uppercase;
	}

	@media (max-width: 450px) {
		.top {
			border-left: $border-line;
		}
	}
</style>
