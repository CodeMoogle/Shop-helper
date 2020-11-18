<template>
	<section class="add-goods container-page">
		<div class="add-goods__form card">
			<h2>Adding a product to the overdue list</h2>
			<hr />
			<AddItemForm />
		</div>

		<div class="add-goods__list card">
			<h2>Products list</h2>
			<hr />
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
		& h2 {
			text-align: center;
		}
		& hr {
			margin-bottom: 30px;
		}
		&__form {
			width: 100%;
		}
		&__list {
			width: 100%;
		}

		& .card {
			max-width: 800px;
			padding: 10px 5px 20px 5px;
			margin: 0 auto 20px auto;
		}
	}
</style>