<template>
	<div class="expire">
		<div class="expire-wrapper" v-for="item in itemsList" :key="item.id">
			<div class="expire__data">
				<p class="expire__data-title">{{ item.label }}</p>

				<div class="expire__data-info">
					<p class="expire__data-info__quantity">
						<span>Quantity:</span> {{ item.quantity }}
					</p>
					<p class="expire__data-info__exp">
						<span>ExpDate:</span> {{ item.expDate }}
					</p>
				</div>
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
					label: "Maxler Golden whey 908gr Vanilla",
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
		display: grid;
		grid-template-rows: 1fr;
		gap: 10px;

		&-wrapper {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px;
			border-radius: 4px;
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
			transition: all 0.3s ease-in-out;
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
</style>