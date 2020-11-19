<template>
	<div class="expire">
		<div class="expire__message" v-if="!allItems.length">No items added.</div>

		<transition-group name="expire-item" tag="div" v-if="allItems.length">
			<div class="expire-wrapper" v-for="item in allItems" :key="item._id">
				<div class="expire__data">
					<p class="expire__data-title">{{ item.label }}</p>

					<div class="expire__data-info">
						<p class="expire__data-info__quantity">
							<span>Quantity:</span> {{ item.quantity }}
						</p>
						<p class="expire__data-info__exp">
							<span>ExpDate:</span> {{ item.expireDate }}
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
import { mapActions, mapGetters } from "vuex";

export default {
	name: "ItemsList",
	computed: mapGetters(["allItems"]),
	methods: {
		...mapActions(["fetchItems", "deleteItem", "setNotification"]),
		removeItem(id, label) {
			this.deleteItem(id);
			this.setNotification({
				text: `You delete ${label} from expiration dates list`,
			});
		},
	},
	mounted() {
		this.fetchItems();
	},
};
</script>

<style lang="scss">
	.expire {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;

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
			background-color: #fff;
			transition: all 1s, background-color 0.3s ease-in-out, filter 0.3s;
			&:nth-child(1) {
				//border-top: 1px solid #000;
			}
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
			width: 30px;
			height: 30px;
			background-color: var(--secondary-color);
			color: var(--danger-color);
			border-radius: 50%;
			&:hover {
				filter: brightness(0.9);
			}
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
		transition: transform 1s;
	}
</style>