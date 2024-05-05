<script lang="ts">
	import arrowIcon from '../assets/images/icons/arrow-green-featured.svg'
	import arrowGrayIcon from '../assets/images/icons/arrow-gray.svg'
	import FinishedItems from './FinishedItems.svelte'
	import UpcomingItems from './UpcomingItems.svelte'

	let isFinished = true

	function toggleUpcoming() {
		isFinished = false
	}

	function toggleFinished() {
		isFinished = true
	}
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
					<button
						style="color: {isFinished ? 'rgba(255, 255, 255, 0.6)' : '#fff'};"
						on:click={toggleUpcoming}
						class="btn btn-left">Live & UPCOMING</button
					>
					<button
						style="color: {!isFinished ? 'rgba(255, 255, 255, 0.6)' : '#fff'};"
						class:selected={isFinished}
						on:click={toggleFinished}
						class="btn">FINISHED</button
					>
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
	{#if isFinished}
		<div>
			<FinishedItems />
		</div>
	{:else}
		<div>
			<UpcomingItems />
		</div>
	{/if}
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
				min-width: 194px;
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
	.right {
		display: none;
	}

	.top {
		border-right: $border-line;
	}

	@media (max-width: 450px) {
		.left {
			width: 360px;

			border-bottom: $border-line;

			.title {
				width: 180px;
			}

			.btn-box {
				.btn-left {
					max-width: 181px;
					min-width: 181px;
				}
			}
		}

		.container {
			.top {
				border-right: none;
				border-bottom: none;
			}
		}

		.right {
			display: none;
		}
	}
</style>
