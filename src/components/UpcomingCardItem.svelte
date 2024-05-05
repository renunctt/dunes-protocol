<script lang="ts">
	import tetherIcon from '../assets/images/card/tether.svg'
	import type { ICardUpcoming } from '../lib/interfaces'

	export let card: ICardUpcoming
</script>

<div class="card">
	<div class="top">
		<img src={card.img} alt="bg" class="bg" />
		<img class="icon" src={card.icon} alt={card.title} />
	</div>

	<h4 class="title">{card.title}</h4>

	<div class="info">
		<p>TOTAL RAISED</p>
		<p class="tba">TBA</p>
	</div>

	<div class="info">
		<p>ATH ROI</p>
		<p class="tba">TBA</p>
	</div>

	<div class="info">
		<p>ATH ROI</p>
		<p class="tba">TBA</p>
	</div>

	<div class="info">
		<p>ATH ROI</p>
		<p class="tba">TBA</p>
	</div>

	<div class="tba-bg">
		<div class="tba-line-left"></div>
		<p class="tba-item">TBA</p>
		<div class="tba-line-right"></div>
	</div>
</div>

<style lang="scss">
	@import '../assets/styles/variables';

	.card {
		position: relative;
		width: 384px;
		border: $border-line;
		border-color: #ffffff;
		z-index: 10;
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

	.title {
		text-align: center;
		padding: 14px;
		font-size: 32px;
		border-bottom: $border-line;
	}
	
	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 37px;
		border-bottom: $border-line;
		font-size: 12px;
		color: rgba($color: #ffffff, $alpha: 0.5);
		font-weight: 500;
	}

	.tba {
		font-size: 14px;
		color: #ffffff;
	}

	.tba-bg {
		height: 78px;
		position: relative;
		@include flex-center;
	}

	.tba-item {
		padding: 3px;
		width: 34px;
		height: 34px;
		position: relative;
		font-weight: 500;
		font-size: 15px;
		z-index: 10;
		background-color: $primary-bg-color;
		border-radius: 0;
		font-weight: 500;
		@include flex-center;
		color: rgba($color: #ffffff, $alpha: 0.5);
	}

	.tba-line-left {
		position: absolute;
		width: 391px;
		height: 1px;
		transform: rotate(11deg);
		top: 36px;
		left: -2px;
		background-color: rgba($color: #ffffff, $alpha: 0.5);
	}

	.tba-line-right {
		position: absolute;
		width: 391px;
		height: 1px;
		transform: rotate(-11deg);
		top: 36px;
		left: -2px;
		background-color: rgba($color: #ffffff, $alpha: 0.5);
	}

		@media (max-width: 450px) {
		.card {
			width: 360px;
		}
		.top {
			border-left: $border-line;

			.icon {
				width: 106px;
			}
		}
		.tba-line-left {
			top: 37px;
			transform: rotate(12deg);
			width: 366px;
		}
		.tba-line-right {
			top: 37px;
			transform: rotate(-12deg);
			width: 366px;
		}
	}
</style>
