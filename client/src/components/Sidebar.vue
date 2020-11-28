<template>
	<div class="sidebar">
		<div class="sidebar__btn" @click.prevent="show">
			<a href="#">
				<i class="fas fa-bars"></i>
			</a>
		</div>

		<transition name="slide">
			<nav class="sidebar__navigation" v-if="isOpen" @click.prevent="show">
				<div class="list">
					<router-link to="/main" class="list__item">
						<i class="fas fa-home"></i>
						<span>Main page</span>
					</router-link>

					<router-link to="/addGoods" class="list__item">
						<i class="fas fa-plus-square"></i>
						<span>Add goods</span>
					</router-link>
				</div>
			</nav>
		</transition>
		<div v-if="isOpen" class="outside-sidebar" @click="isOpen = false"></div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		show(e) {
			if (e.target instanceof HTMLElement && !this.$el.contains(e.target)) {
				this.isOpen = false;
			}
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style lang="scss">
	.sidebar {
		&__navigation {
			position: absolute;
			top: 51px;
			left: 0;
			width: 200px;
			min-height: 100vh;
			background-color: var(--secondary-color);
		}
		* .list {
			z-index: 100;
		}
		&__btn {
			font-size: 25px;
		}
		& a {
			color: inherit;
		}
		& i {
			margin-right: 10px;
		}
		@media screen and (max-width: $xs-phones) {
			& {
				font-size: 1.2rem;
			}
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: left 0.3s ease-in-out;
	}

	.slide-enter,
	.slide-leave-to {
		left: -200px;
	}
</style>