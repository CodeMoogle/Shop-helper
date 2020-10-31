<template>
	<div class="sidebar">
		<div class="sidebar__btn" @click.prevent="show">
			<a href="#">
				<i class="fas fa-bars"></i>
			</a>
		</div>

		<transition name="slide">
			<nav class="sidebar__navigation" v-if="isOpen" @click.prevent="show">
				<ul class="list">
					<li class="list__item">
						<i class="fas fa-home"></i>
						<router-link to="/">Main page</router-link>
					</li>
					<li class="list__item">
						<i class="fas fa-home"></i>
						<router-link to="/login">Sign in</router-link>
					</li>
					<li class="list__item">
						<i class="fas fa-home"></i>
						<router-link to="/register">Sign up</router-link>
					</li>
				</ul>
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
		&__btn {
			font-size: 25px;
		}
		& a {
			color: inherit;
		}
		& i {
			margin-right: 10px;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: left 0.3s;
	}

	.slide-enter,
	.slide-leave-to {
		left: -200px;
	}
</style>