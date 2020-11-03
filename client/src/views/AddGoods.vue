<template>
	<section class="add-goods container flex-column">
		<AddItemForm />
		<ItemsList />
	</section>
</template>

<script>
import AddItemForm from "@/components/addItemForm.vue";
import ItemsList from "@/components/ItemsList.vue";

export default {
	name: "AddGoods",
	components: {
		AddItemForm,
		ItemsList,
	},
};
</script>

<style>
	.add-goods {
		margin-top: 5rem;
	}
</style>