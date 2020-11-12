<template>
	<div class="main container-center flex">
		<h1>Wellcome back, {{ this.currentUser.displayName }}.</h1>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Main",
	computed: mapGetters(["currentUser"]),
};
</script>