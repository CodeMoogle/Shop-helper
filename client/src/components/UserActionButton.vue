<template>
	<div class="user-action">
		<span class="btn" @click="show">
			<p class="user-action__username">{{ getUser.displayName }}</p>
			<i class="fas fa-arrow-down"></i>
		</span>
		<Dropdown :isOpen="isOpen" :classes="'user-action__dropdown'">
			<ul class="user-action__dropdown-list">
				<li class="user-action__dropdown-list__item">
					<i class="fas fa-user"></i>
					<span>Profile</span>
				</li>

				<li class="user-action__dropdown-list__item">
					<i class="fas fa-cog"></i>
					<span>Settings</span>
				</li>

				<li class="user-action__dropdown-list__item" @click="this.logout">
					<i class="fas fa-sign-out-alt"></i>
					<span>Logout</span>
				</li>
			</ul>
		</Dropdown>
	</div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

import { mapActions } from "vuex";

export default {
	name: "UserActionButton",
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
	components: {
		Dropdown,
	},
	computed: {
		getUser() {
			return this.user;
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		...mapActions(["logout"]),
		show(e) {
			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style lang="scss">
	.user-action {
		position: relative;
		max-width: 200px;
		& > span.btn {
			display: flex;
			align-items: center;
			margin: 0 0;
			padding: 10px 10px;
		}
		&__username {
			max-width: 130px;
			margin-right: 0.5rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		&__dropdown {
			position: absolute;
			top: 50px;
			right: 0;
			min-width: 50px;
			min-height: 50px;
			background-color: var(--primary-color);
			border-radius: 12px;
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
			overflow: hidden;
			&-list {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 200px;
				&__item {
					width: 100%;
					padding: 10px 10px;
					background-color: var(--primary-color);
					font-size: 1.1rem;
					font-weight: bold;
					transition: background-color 0.3s ease;
					cursor: pointer;
					&:hover {
						background-color: rgba(0, 0, 0, 0.1);
					}
					& > i {
						margin: 0 1rem 0 2rem;
					}
				}
			}
		}

		@media (max-width: $xs-phones) {
			max-width: 150px;
		}
	}
</style>