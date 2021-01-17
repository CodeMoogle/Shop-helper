<template>
	<div class="sidebar" v-click-outside="hide">
		<div class="sidebar__btn" @click="show">
			<a href="#">
				<i class="fas fa-bars"></i>
			</a>
		</div>

		<transition name="slide">
			<nav class="sidebar__navigation" v-if="isOpen">
				<ul class="list">
					<li
						class="list__item"
						v-for="link in links"
						:key="link.title + link.linkTo"
						@click="hide"
					>
						<router-link :to="link.linkTo">
							<i :class="link.linkIcon"></i>
							<span>{{ link.title }}</span>
						</router-link>
					</li>
				</ul>
			</nav>
		</transition>
	</div>
</template>

<script>
import clickOutside from "@/utils/directives";

export default {
	name: "Sidebar",
	data() {
		return {
			isOpen: false,
			links: [
				{ title: "Main Page", linkTo: "/main", linkIcon: "fas fa-home" },
				{
					title: "Add Goods",
					linkTo: "/addGoods",
					linkIcon: "fas fa-plus-square",
				},
			],
		};
	},
	methods: {
		show() {
			this.isOpen = !this.isOpen;
		},
		hide() {
			this.isOpen = false;
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
			background-color: var(--primary-color);
			box-shadow: 3px 0 5px -2px var(--muted-color);
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