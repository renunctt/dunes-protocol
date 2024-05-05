<script>
	import Logo from '../components/ui/Logo.svelte'
	import bigLogoIcon from '../assets/images/big-logo.png'
	import { Link } from 'svelte-routing'
	import twitterIcon from '../assets/images/icons/twitter.svg'
	import discordIcon from '../assets/images/icons/discord.svg'
	import telegramIcon from '../assets/images/icons/telegram.svg'

	const items1 = [
		{ t: 'Our Solutions', l: 'solutions' },
		{ t: 'Documentation', l: 'documentation' },
		{ t: 'Our Solutions', l: 'roadmap' },
	]

	const items2 = [
		{ t: 'Home', l: '/' },
		{ t: 'Launchpad', l: '/launchpad' },
		{ t: 'Advisors', l: '/advisors' },
	]

	const socialItems = [
		{ icon: twitterIcon, link: 'twitter.com', alt: 'twitter' },
		{ icon: discordIcon, link: 'discord.com', alt: 'discord' },
		{ icon: telegramIcon, link: 'telegram.org', alt: 'telegram' },
	]
</script>

<footer class="footer">
	<div class="container">
		<div class="logo">
			<Logo />
		</div>

		<div class="items">
			<div class="item">
				{#each items1 as item}
					<a href="#{item.l}">{item.t}</a>
				{/each}
			</div>

			<div class="item">
				{#each items2 as item}
					<Link to={item.l}>{item.t}</Link>
				{/each}
			</div>

			<div class="social-items">
				<p>Follow us</p>
				{#each socialItems as item}
					<a href="https://{item.link}">
						<img src={item.icon} alt={item.alt} />
					</a>
				{/each}
			</div>
		</div>

		<div class="big-logo">
			<img src={bigLogoIcon} alt="Logo" />
		</div>
	</div>

	<div class="bottom">
		<div class="container">Dunes (c) 2024. All rights reserved.</div>
	</div>
</footer>

<style lang="scss">
	@import '../assets/styles/variables';

	.footer {
		position: relative;
		border-top: $border-line;
		padding-top: 112px;
		background-color: $second-bg-color;
		z-index: 40;

		.container {
			@include flex-center;
			align-items: start;
			gap: 100px;
		}
	}

	.item {
		font-family: 'New Science', $font-stack;
		font-size: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.social-items {
		p {
			margin-bottom: 20px;
		}

		a {
			margin-right: 6px;
		}
	}

	.big-logo {
		position: relative;
		margin-left: auto;
		top: 6px;
		left: 60px;
	}

	.bottom {
		padding: 20px 0 30px;
		border-top: $border-line;

		.container {
			font-family: 'B612 Mono', $font-stack;
			justify-content: start;
			color: $second-color;
		}
	}
	.items {
		display: flex;
		gap: 95px;
	}

	@media (max-width: 450px) {
		.footer {
			padding-top: 40px;
			.container {
				flex-direction: column;
				gap: 20px;
			}
		}

		.item {
			font-size: 14px;
		}
		.items {
			display: flex;
			gap: 45px;
		}

		.big-logo {
			top: -20px;
			left: -10px;
			margin-left: auto;

			img {
				width: 92px;
			}
		}

		.bottom {
			position: relative;
			top: -24px;
			padding-bottom: 0;

			.container {
				font-size: 8px;
			}
		}
	}
</style>
