<template>
	<section class="add-goods">
		<div class="container-page">
			<div class="add-goods__form">
				<h2>Adding a product to the expiration dates list</h2>
				<AddItemForm />
			</div>

			<hr class="divider" />

			<div class="add-goods__list">
				<h2>Expiration dates list</h2>
				<ItemsList />
			</div>
		</div>
	</section>
</template>

<script>
import AddItemForm from "@/components/AddItemForm.vue";
import ItemsList from "@/components/ItemsList.vue";

export default {
	name: "AddGoods",
	components: {
		AddItemForm,
		ItemsList,
	},
};
</script>

<style lang="scss">
	.add-goods {
		& h2 {
			text-align: center;
			margin-bottom: 1.5rem;
		}
		&__form,
		&__list {
			width: 100%;
			margin: 0 auto;
			padding: 0 5px;
		}

		@media screen and (max-width: $xs-phones) {
			font-size: 0.8rem;
		}
	}
</style>