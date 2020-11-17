<template>
	<div class="item-form">
		<form class="form" @submit.prevent="submitHandler">
			<div class="form__group">
				<input
					type="text"
					name="addItemLabel"
					id="addItemLabel"
					class="form__control"
					placeholder="Product label"
					required
					v-model="label"
				/>
				<label for="addItemLabel" class="form__label">Product label*</label>
			</div>

			<div class="form__group">
				<input
					type="number"
					name="addItemQuantity"
					id="addItemQuantity"
					class="form__control"
					placeholder="Quantity"
					required
					v-model="quantity"
				/>
				<label for="addItemQuantity" class="form__label">Quantity*</label>
			</div>

			<div class="form__group">
				<input
					type="date"
					name="addItemExpire"
					id="addItemExpire"
					class="form__control"
					placeholder="dd-mm-yyyy"
					required
					v-model="expireDate"
				/>
				<label for="addItemExpire" class="form__label">Expire date*</label>
			</div>

			<input type="submit" value="Add item to list" class="btn" />
		</form>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import { formatDate } from "@/utils/dates.js";

export default {
	name: "AddItemForm",
	data() {
		return {
			label: "",
			quantity: null,
			expireDate: "",
		};
	},
	methods: {
		...mapActions(["addItem"]),
		submitHandler() {
			const newItem = {
				label: this.label,
				quantity: this.quantity,
				expireDate: formatDate(this.expireDate),
			};

			this.addItem(newItem);

			this.label = "";
			this.quantity = "";
			this.expireDate = "";
		},
	},
};
</script>

<style lang="scss">
	.item-form {
		& .form {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-around;
		}
		& .form__group:first-child {
			width: 90%;
		}
		& .form__group:not(:first-child) {
			width: 40%;
			margin: 0 5px;
		}

		& .btn {
			width: 90%;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
</style>