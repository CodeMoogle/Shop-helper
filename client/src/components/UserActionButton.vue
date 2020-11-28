<template>
	<div class="user-action">
		<span class="btn" @click="show">
			<p class="user-action__username">{{ getUserName }}</p>
			<i class="fas fa-arrow-down"></i>
		</span>
		<DropdownMenu :isOpen="isOpen" />
	</div>
</template>

<script>
import DropdownMenu from "@/components/DropdownMenu.vue";

import { mapGetters } from "vuex";

export default {
	name: "UserActionButton",
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
	components: {
		DropdownMenu,
	},
	computed: {
		getUserName() {
			return this.user.displayName;
		},
	},
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

		@media (max-width: $xs-phones) {
			max-width: 150px;
		}
	}
</style>