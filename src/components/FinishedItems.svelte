<script lang="ts">
	import CataImage from '../assets/images/card/Catamoto-CATA.png'
	import CataIcon from '../assets/images/card/CATA.png'
	import EseImage from '../assets/images/card/Eesee-ESE.png'
	import EseIcon from '../assets/images/card/ESE.png'
	import NextImage from '../assets/images/card/Next-Gem-AI.png'
	import NextIcon from '../assets/images/card/NEXT.png'

	import twitterIcon from '../assets/images/icons/twitter.svg'
	import wwwIcon from '../assets/images/icons/world-wide-web.svg'
	import discordIcon from '../assets/images/icons/discord.svg'
	import telegramIcon from '../assets/images/icons/telegram.svg'
	import CardItem from './CardItem.svelte'
	import type { ICard } from '../lib/interfaces'

	const cards: ICard[] = [
		{
			title: 'Catamoto CATA',
			img: CataImage,
			icon: CataIcon,
			price: '225, 000',
			percent: '25x',
			social: [
				{ icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
				{ icon: wwwIcon, link: 'https://google.com', alt: 'web site' },
				{ icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' },
			],
		},
		{
			title: 'Catamoto CATA',
			img: EseImage,
			icon: EseIcon,
			price: '500, 000',
			percent: '8x',
			social: [
				{ icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
				{ icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' },
			],
		},
		{
			title: 'Catamoto CATA',
			img: NextImage,
			icon: NextIcon,
			price: '90, 000',
			percent: '2x',
			social: [
				{ icon: twitterIcon, link: 'https://twitter.com', alt: 'twitter' },
				{ icon: wwwIcon, link: 'https://google.com', alt: 'web site' },
				{ icon: discordIcon, link: 'https://discord.com', alt: 'discord' },
				{ icon: telegramIcon, link: 'https://telegram.com', alt: 'telegram' },
			],
		},
	]
</script>

<section>
	<div class="container">
		<div class="top">
			<div class="top-line first"><span></span></div>
			<div class="top-line not"><span class="second"></span></div>
			<div class="top-line"><span class="last"></span></div>
		</div>
	</div>

	<div class="container">
		{#each cards as card}
			<CardItem {card} />
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
		.container {
			flex-direction: column;
			gap: 40px;
		}
		.second {
			border: none;
		}
		.first span {
			min-width: 194px;
		}
		.top-line {
			max-width: 192px;
		}
		.not span {
			background-color: initial;
			border: none;
		}
	}
</style>
