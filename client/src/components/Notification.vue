<template>
	<transition name="notify">
		<div
			class="notification"
			:class="this.notification.type"
			v-if="this.notification.isOpen"
		>
			<div class="notification__icon">
				<i class="fas fa-envelope" v-if="this.notification.type === 'info'"></i>
				<i
					class="fas fa-exclamation-circle"
					v-if="this.notification.type === 'danger'"
				></i>
			</div>
			<p class="notification__data">{{ this.notification.text }}</p>
			<i
				class="far fa-times-circle notification__close"
				@click="this.closeNotification"
			>
			</i>
		</div>
	</transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Notification",
	computed: mapGetters(["notification"]),
	methods: mapActions(["closeNotification"]),
};
</script>

<style lang="scss" scoped>
	.notification {
		position: fixed;
		top: $header-height + 10px;
		right: 5px;
		display: flex;
		align-items: center;
		width: 300px;
		max-height: 90px;
		overflow: hidden;
		background-color: var(--info-color);
		color: var(--secondary-color);
		border-radius: 8px;
		opacity: 1;
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
		}

		&__close {
			font-size: 20px;
			transition: all 0.3s;
			padding: 10px;
			cursor: pointer;
			&:hover {
				transform: rotate(90deg);
			}
		}
	}

	.info {
		background-color: var(--info-color);
	}

	.danger {
		background-color: var(--danger-color);
	}

	.notify-enter-active,
	.notify-leave-active {
		transition: right 0.6s ease-in-out;
	}

	.notify-enter,
	.notify-leave-to {
		right: -350px;
	}
</style>