<template>
	<div class="expire">
		<div class="card" v-for="item in itemsList" :key="item.id">
			<div class="expire__data">
				<p class="expire__data-label">{{ item.label }}</p>
				<hr />
				<p class="expire__data-quantity">
					<span>Quantity:</span> {{ item.quantity }}
				</p>
				<p class="expire__data-exp"><span>ExpDate:</span> {{ item.expDate }}</p>
				<p class="expire__data-status">
					<span>Status:</span> <span class="expire__data-status-bar"></span>
				</p>
			</div>

			<a href="#" class="expire__action">
				<i class="fas fa-trash-alt"></i>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "ItemsList",
	data() {
		return {
			itemsList: [
				{
					id: 1,
					label: "Maxler Golden whey 908gr Vanilla sfdf af af a fafa a  af sad",
					quantity: 2,
					expDate: "2020-11-15",
				},
				{
					id: 2,
					label: "Quest, questbar 60gr birthdate cake",
					quantity: 13,
					expDate: "2020-12-19",
				},
				{
					id: 3,
					label: "ON Gold standart whey 908gr Chocolate",
					quantity: 1,
					expDate: "2021-03-15",
				},
				{
					id: 4,
					label: "Scivation BCAA 457gr Fruit Punch",
					quantity: 7,
					expDate: "2020-10-10",
				},
			],
		};
	},
};
</script>

<style lang="scss">
	.expire {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		&__data {
			padding: 5px 10px;
			&-label {
				width: 100%;
				transition: all 0.3s;
				margin-top: 5px;
				line-height: 1.2;
				font-weight: bold;
				text-align: center;
			}
		}
		&__action {
			width: 100%;
			height: 30px;
			background-color: var(--danger-color);
			color: #fff;
			text-align: center;
			border-radius: 0 0 10px 10px;
		}

		& .card {
			width: 300px;
			min-height: 250px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 0;
			margin: 20px 5px;
		}
	}
</style>