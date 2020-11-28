<template>
	<section class="add-goods container-page">
		<div class="add-goods__form card">
			<h2>Adding a product to the expiration dates list</h2>
			<AddItemForm />
		</div>

		<div class="add-goods__list card">
			<h2>Expiration dates list</h2>
			<ItemsList />
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
		& > .card {
			padding: 10px 5px;
			overflow: hidden;
		}
		& h2 {
			text-align: center;
			margin-bottom: 2rem;
		}
		&__form,
		&__list {
			width: 100%;
			max-width: 800px;
			margin: 0 auto 20px auto;
		}
	}
</style>