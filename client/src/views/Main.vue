<template>
	<section class="main">
		<div class="container_center flex">
			<h1>Wellcome back, {{ this.currentUser.displayName }}.</h1>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Main",
	computed: mapGetters(["currentUser"]),
};
</script>