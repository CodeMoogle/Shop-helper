<template>
	<div class="expire">
		<div class="expire__message" v-if="!sortedItems.length && !isLoading">
			No items added.
		</div>

		<Loader v-if="isLoading" />

		<div class="expire__options" v-if="sortedItems.length">
			<div class="form__group">
				<span>Sort by:</span>
				<select
					name="expireSort"
					id="expireSort"
					class="form__control"
					@change="sortHandler"
				>
					<option value="expireDate">Expire date Asc &#8593;</option>
					<option value="-expireDate">Expire date Desc &#8595;</option>
					<option value="label">Label Asc &#8593;</option>
					<option value="-label">Label Desc &#8595;</option>
					<option value="quantity">Quantity Asc &#8593;</option>
					<option value="-quantity">Quantity Desc &#8595;</option>
				</select>
			</div>
		</div>

		<transition-group name="expire-item" tag="div" v-if="sortedItems.length">
			<div
				class="expire-wrapper"
				v-for="item in sortedItems"
				:key="item._id"
				:class="getExpStatus(item.expireDate)"
			>
				<div class="expire__data">
					<p class="expire__data-title">{{ item.label }}</p>
					<div class="expire__data-info">
						<p class="expire__data-info__quantity">
							<span>Quantity:</span> {{ item.quantity }}
						</p>
						<p class="expire__data-info__exp">
							<span>ExpDate:</span> {{ getFormatedDate(item.expireDate) }}
						</p>
					</div>
				</div>

				<a
					href="#"
					class="expire__action"
					@click="removeItem(item._id, item.label)"
				>
					<i class="fas fa-trash-alt"></i>
				</a>
			</div>
		</transition-group>
	</div>
</template>

<script>
import Loader from "@/components/Loader.vue";

import { mapActions, mapGetters, mapMutations } from "vuex";

import { compareDates, formatDate } from "@/utils/dates";

export default {
	name: "ItemsList",
	components: {
		Loader,
	},
	computed: {
		...mapGetters(["sortedItems", "isLoading"]),
	},
	methods: {
		...mapActions(["fetchItems", "deleteItem", "setNotification"]),
		...mapMutations(["setCurrentSortBy"]),
		removeItem(id, label) {
			this.deleteItem(id);
			this.setNotification({
				text: `You delete ${label} from expiration dates list`,
			});
		},
		sortHandler(e) {
			this.setCurrentSortBy(e.target.value);
		},
		getFormatedDate(date) {
			return formatDate(date);
		},
		getExpStatus(itemExpDate) {
			return compareDates(itemExpDate);
		},
	},
	mounted() {
		this.fetchItems();
	},
};
</script>

<style lang="scss">
	.expire {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;

		&__options {
			display: flex;
			align-items: center;
			padding: 0 5px 10px 0;
			& > .form__group {
				width: 150px;
				font-size: 16px;
				margin-bottom: 0;
				&:focus-within {
					transform: scale(1);
				}
			}
		}

		&__message {
			text-align: center;
			font-size: 20px;
			font-weight: bold;
		}

		&-wrapper {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px;
			border-bottom: 1px solid #000;
			margin-bottom: 5px;
			background-color: #fff;
			transition: all 0.5s linear, background-color 0.3s ease-in-out, filter 0.3s;
			&:hover {
				filter: brightness(0.95);
			}
		}

		&__data {
			&-title {
				width: 100%;
				font-weight: bold;
			}
			&-info {
				display: flex;
				align-items: center;
				color: var(--muted-color);
				& p:first-child {
					margin-right: 15px;
				}
				& p > span {
					font-weight: bold;
					font-style: italic;
				}
			}
		}
		&__action {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 30px;
			height: 30px;
			background-color: var(--secondary-color);
			color: var(--danger-color);
			border-radius: 50%;
			&:hover {
				filter: brightness(0.9);
			}
		}
	}

	.exp {
		&_overdue {
			border-left: 0.3rem solid var(--muted-color);
		}
		&_danger {
			border-left: 0.3rem solid var(--danger-color);
		}
		&_warning {
			border-left: 0.3rem solid var(--warning-color);
		}
		&_success {
			border-left: 0.3rem solid var(--success-color);
		}
	}

	.expire-item-leave-active {
		position: absolute;
	}
	.expire-item-enter,
	.expire-item-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
	.expire-list-move {
		transition: transform 1s linear;
	}
</style>