<script lang="ts">
	import arrowIcon from '../assets/images/icons/arrow-green-featured.svg'
	import EvermoonIcon from '../assets/images/logos/Evermoon.png'
	import warningIcon from '../assets/images/icons/warning.svg'
	import homeCardImage from '../assets/images/video/home-card.png'

	import twitterIcon from '../assets/images/icons/twitter.svg'
	import wwwIcon from '../assets/images/icons/world-wide-web.svg'
	import discordIcon from '../assets/images/icons/discord.svg'
	import telegramIcon from '../assets/images/icons/telegram.svg'
</script>

<section>
	<div class="container">
		<div class="top">
			<h2 class="title">
				<img class="left" src={arrowIcon} alt="arrow" />
				<span>Featured Launch</span>
				<img class="right" src={arrowIcon} alt="arrow" />
			</h2>
		</div>

		<div class="card">
			<div class="card-left">
				<div class="content-top"></div>

				<div class="content">
					<h3 class="content-title">
						<img src={EvermoonIcon} alt="Evermoon" />
						Evermoon
					</h3>

					<div class="social">
						<a href="https://twitter.com">
							<img src={twitterIcon} alt="twitter" />
						</a>
						<a href="https://google.com">
							<img src={wwwIcon} alt="world wide web" />
						</a>
						<a href="https://discord.com">
							<img src={discordIcon} alt="discord" />
						</a>
						<a href="https://telegram.org">
							<img src={telegramIcon} alt="telegram" />
						</a>
					</div>

					<div class="btn-box">
						<button class="btn">Gaming</button>
						<button class="btn">Web3</button>
					</div>

					<p class="info">Next-Gen 5v5 3-lane MOBA</p>

					<p class="description">Total Raise: <span>$300,000</span></p>
					<p class="description">
						Registration Ends in: <span>8d 6h 50m 31s</span>
					</p>

					<div class="bottom-box">
						<button class="btn">PARTICIPATE NOW</button>

						<span>
							<img src={warningIcon} alt="warning" />
							No KYC required to opt-in
						</span>
					</div>
				</div>
			</div>

			<div class="card-right">
				<div class="card-top"></div>
				<div class="card-video">
					<img src={homeCardImage} alt="video" />
				</div>
			</div>
		</div>
	</div>
</section>
<div class="triple"></div>

<style lang="scss">
	@import '../assets/styles/variables';

	.top {
		width: 384px;
		height: 153px;
		border-left: $border-line;
		border-right: $border-line;
		@include flex-center;
		align-items: end;
	}

	.title {
		width: 385px;
		height: 60px;
		border-top: $border-line;
		@include flex;
		justify-content: space-between;

		span {
			font-size: 40px;
			font-weight: 500;
		}

		.left {
			position: relative;
			top: 25px;
		}

		.right {
			position: relative;
			top: -25px;
			transform: rotate(180deg);
		}
	}

	.card {
		display: flex;
	}

	.content-top {
		width: 384px;
		height: 47px;
		border: $border-line;
		border-bottom: none;
	}

	.content {
		height: 448px;
		padding-top: 28px;
		border: $border-line;
		border-color: #ffffff;
		width: 385px;
		border-right: none;
	}

	.content-title {
		padding-left: 28px;
		@include flex;
		gap: 20px;
		font-size: 28px;
		font-weight: 500;
	}

	.social {
		padding-left: 28px;
		margin-top: 22px;
		@include flex;
		gap: 20px;
	}

	.btn-box {
		padding-left: 28px;
		@include flex;
		gap: 10px;
		margin: 16px 0;

		.btn {
			padding: 5px 12px;
			border-radius: 22px;
			border: 1px solid #81d100;
		}
	}

	.info {
		border-top: $border-line;
		padding-left: 28px;
		padding-top: 28px;
		font-size: 28px;
		font-weight: 500;
	}

	.description {
		padding-left: 28px;
		font-size: 14px;
		font-weight: 500;
		margin-top: 22px;

		span {
			color: #81d100;
		}
	}

	.bottom-box {
		padding-left: 28px;
		@include flex;
		margin-top: 50px;
		gap: 30px;

		.btn {
			@include flex-center;
			font-size: 12px;
			font-family: 'B612 Mono', $font-stack;
			width: 151px;
			height: 41px;
			background-image: url('../assets/images/frames/feature-frame.svg');
			background-repeat: no-repeat;
		}

		span {
			@include flex-center;
			gap: 8px;
			font-size: 11px;
		}
	}

	.card-top {
		border-top: $border-line;
		border-right: $border-line;
		height: 47px;
		position: relative;
		left: -1px;
	}

	.card-right {
		.card-video {
			min-width: 814px;
			position: relative;
			left: -1px;
			height: 476px;
			border: $border-line;
			border-color: #ffffff;
			border-left: none;

			img {
				min-width: 813px;
				max-height: 476px;
			}
		}
	}
</style>
