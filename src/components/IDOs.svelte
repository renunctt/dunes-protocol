<script lang="ts">
	import arrowIcon from '../assets/images/icons/arrow-green-featured.svg'
	import arrowGrayIcon from '../assets/images/icons/arrow-gray.svg'
	import FinishedItems from './FinishedItems.svelte'
</script>

<section>
	<div class="container">
		<div class="top">
			<div class="left">
				<h2 class="title">
					<img class="title-left" src={arrowIcon} alt="arrow" />
					IDOs
					<img class="title-right" src={arrowIcon} alt="arrow" />
				</h2>

				<div class="btn-box">
					<button class="btn btn-left">Live & UPCOMING</button>
					<button class="btn">FINISHED</button>
				</div>
			</div>

			<div class="right">
				<div class="btn-box">
					<button class="btn-left">
						<img src={arrowGrayIcon} alt="left" />
					</button>
					<span>1/4</span>
					<button class="btn-right">
						<img src={arrowGrayIcon} alt="right" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<FinishedItems />
</section>

<style lang="scss">
	@import '../assets/styles/_variables.scss';

	.container {
		height: 213px;

		.top {
			@include flex;
			justify-content: space-between;
			height: 100%;
			border-bottom: $border-line;
		}
	}
	

	.left {
		display: flex;
		justify-content: end;
		flex-direction: column;
		height: 100%;
		width: 384px;
		border-left: $border-line;
		border-right: $border-line;

		.title {
			width: 193px;
			border-top: $border-line;
			border-right: $border-line;
			font-size: 41px;
			font-weight: 500;
			@include flex;
			justify-content: space-between;

			.title-left {
				position: relative;
				top: 19px;
			}

			.title-right {
				position: relative;
				top: -19px;
				transform: rotate(180deg);
			}
		}

		.btn-box {
			@include flex;
			border-top: $border-line;
			height: 60px;
			.btn {
				text-transform: uppercase;
				height: 60px;
				@include flex-center;
				min-width: 195px;
				font-size: 15px;
				font-family: 'B612 Mono', $font-stack;
			}

			.btn-left {
				border-right: $border-line;
			}
		}
	}

	.right {
		display: flex;
		justify-content: end;
		flex-direction: column;
		height: 100%;
		width: 190px;
		border-left: $border-line;
		border-right: $border-line;

		.btn-box {
			border-top: $border-line;
			height: 60px;
			@include flex-center;

			gap: 17px;
			.btn-right {
				position: relative;
				top: -2px;
				transform: rotate(180deg);
			}
		}
	}
</style>
