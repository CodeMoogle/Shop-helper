<template>
	<section class="add-goods container-page flex-column">
		<div class="add-goods__form">
			<h2>Adding a product to the overdue list</h2>
			<AddItemForm />
		</div>

		<div class="add-goods__list">
			<ItemsList />
		</div>
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

<style lang="scss">
	.add-goods {
		&__form {
			& h2 {
				margin-bottom: 30px;
				text-align: center;
			}
		}
		&__list {
			margin-top: 40px;
		}
	}
</style>