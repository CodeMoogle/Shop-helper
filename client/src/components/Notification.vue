<template>
	<transition name="notification-slide">
		<div class="n-center notification">
			<div class="notification__icon">
				<i class="far fa-bell"></i>
			</div>
			<div class="notification__data">
				<p class="notification__data-title">Hey, Moogle!</p>
				<p class="notification__data-text">This is notification for you =)</p>
			</div>
			<div class="notification__close">&#10006;</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Notification",
};
</script>

<style lang="scss">
	.notification {
		position: absolute;
		top: $header-height + 10px;
		right: 5px;
		display: flex;
		align-items: center;
		width: 320px;
		max-height: 90px;
		overflow-y: auto;
		background-color: var(--info-color);
		color: var(--secondary-color);
		border-radius: 8px;
		z-index: 1000;

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			font-size: 25px;
			padding: 10px;
		}

		&__data {
			width: 100%;
			height: 100%;
			font-size: 14px;
			border-right: 1px solid var(--secondary-color);
			padding: 5px 0;
			&-title {
				font-size: 14px;
			}
		}

		&__close {
			font-size: 20px;
			padding: 10px;
			transition: all 0.3s;
			cursor: pointer;

			&:hover {
				transform: rotate(90deg);
			}
		}

		.notification-slide-enter-active,
		.notification-slide-leave-active {
			transition: right 0.3s ease-in-out;
		}

		.notification-slide-enter,
		.notification-slide-leave-to {
			right: -350px;
		}
	}
</style>