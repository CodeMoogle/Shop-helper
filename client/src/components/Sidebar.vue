<template>
	<div class="sidebar">
		<div class="sidebar__btn">
			<a href="#" @click.prevent="show">
				<i class="fas fa-bars"></i>
			</a>
		</div>

		<transition name="slide">
			<nav class="sidebar__navigation" v-if="isOpen">
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
		show() {
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
		transition: left 0.5s;
	}

	.slide-enter,
	.slide-leave-to {
		left: -200px;
	}
</style>