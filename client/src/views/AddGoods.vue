<template>
	<section class="add-goods container-page flex">
		<AddItemForm />
	</section>
</template>

<script>
import AddItemForm from "@/components/addItemForm.vue";
export default {
	name: "AddGoods",
	components: {
		AddItemForm,
	},
};
</script>

<style>
</style>