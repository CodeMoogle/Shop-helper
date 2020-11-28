<template>
	<transition name="dropdown">
		<div class="dropdown-menu" v-if="getStatus">
			<ul class="list">
				<li class="dropdown-menu__list-item">
					<span>Drop item</span>
					<i class="fas fa-home"></i>
				</li>
				<li class="dropdown-menu__list-item">
					<span>Drop item</span>
					<i class="fas fa-home"></i>
				</li>
				<li class="dropdown-menu__list-item">
					<span>Drop item</span>
					<i class="fas fa-home"></i>
				</li>
			</ul>
		</div>
	</transition>
</template>

<script>
export default {
	name: "DropdownMenu",
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		getStatus() {
			return this.isOpen;
		},
	},
};
</script>

<style lang="scss">
	.dropdown-menu {
		position: absolute;
		top: $header-height + 2px;
		right: 0;
		width: 200px;
		min-height: 100px;
		background-color: var(--secondary-color);
		border-radius: 12px;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
		overflow: hidden;

		&__list {
			display: flex;
			flex-direction: column;
			align-items: center;

			&-item {
				width: 100%;
				padding: 10px 10px;
				background-color: var(--secondary-color);
				text-align: center;
				font-size: 1.1rem;
				font-weight: bold;
				transition: background-color 0.3s ease;
				cursor: pointer;
				&:hover {
					background-color: rgba(0, 0, 0, 0.1);
				}
				& > span {
					margin-right: 0.5rem;
				}
			}
		}
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