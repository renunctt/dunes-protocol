<script lang="ts">
	import type { ICardUpcoming } from '../lib/interfaces'
	import PNDCImage from '../assets/images/card/PondPNDC.png'
	import PNDCIcon from '../assets/images/card/PNDC.png'
	import WSDMImage from '../assets/images/card/WisdomisWSDM.png'
	import WSDMIcon from '../assets/images/card/WSDM.png'
	import ESXImage from '../assets/images/card/EstateXESX.png'
	import ESXIcon from '../assets/images/card/ESX.png'
	import UpcomingCardItem from './UpcomingCardItem.svelte'



	const cards: ICardUpcoming[] = [
		{
			title: 'Pond  PNDC',
			img: PNDCImage,
			icon: PNDCIcon
		},
		{
			title: 'Wisdomis WSDM',
			img: WSDMImage,
			icon: WSDMIcon
		},
		{
			title: 'EstateX ESX',
			img: WSDMImage,
			icon: WSDMIcon
		}
	]
</script>

<section>
	<div class="container">
		<div class="top">
			<div class="top-line first"><span></span></div>
			<div class="top-line not"><span class="second"></span></div>
			<div class="top-line last-item"><span class="last"></span></div>
		</div>
	</div>

	<div class="container cards">
		{#each cards as card}
			<UpcomingCardItem {card} />
		{/each}
	</div>
</section>

<style lang="scss">
	@import '../assets/styles/variables';

	section {
		.container {
			display: flex;
			justify-content: space-between;
		}
	}

	.top {
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 47px;

		.top-line {
			display: flex;
			position: relative;
			top: 1px;
			width: 384px;
			width: 384px;
			height: 100%;
			border-left: $border-line;
			border-right: $border-line;

			span {
				height: 47px;
				width: 193px;
				border-right: $border-line;
			}

			.last {
				width: 193px;
			}
		}

		.not {
			border: none;
		}
	}

	@media (max-width: 450px) {
		.cards {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		.top {
			width: 360px;
			.top-line {
				span {
					width: 180px;
					border: none;
				}

				.last {
					display: none;
				}
			}

			.top-line.not {
					span {
						width: 179px;
						border-right: $border-line;
					}
			}

			.top-line.last-item {
				display: none;
			}
		}
	}
</style>