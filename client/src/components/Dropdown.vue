<template>
	<transition name="dropdown" tag="div" :class="getClasses" v-if="getStatus">
		<div class="" :class="getClasses" v-if="getStatus">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Dropdown",
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},
		classes: {
			type: String,
		},
	},
	computed: {
		getStatus() {
			return this.isOpen;
		},
		getClasses() {
			this.classes ? this.classes : "dropdown";
			if (this.classes) {
				return this.classes;
			} else {
				return "dropdown";
			}
		},
	},
};
</script>

<style lang="scss">
	.dropdown {
		position: absolute;
		top: 50px;
		right: 0;
		min-width: 50px;
		min-height: 50px;
		background-color: var(--primary-color);
		border-radius: 12px;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}

	.dropdown-enter-active,
	.dropdown-leave-active {
		transition: all 0.4s ease-in-out;
	}

	.dropdown-enter,
	.dropdown-leave-to {
		opacity: 0;
		transform: scale(0);
	}
</style>