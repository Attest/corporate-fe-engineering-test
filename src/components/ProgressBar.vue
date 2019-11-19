<template>
	<div class="progress-bar">
		<div class="fill" :style="`width: ${fill}%`">
			<span class="label">{{label}}</span>
			<span class="label label--right">{{`${fill}%`}}</span>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: 'progress-bar',
		props: {
		  fill: {
		    type: Number
		  },
			label: {
		    type: String
			}
		}
	})
</script>

<style lang="scss">
	@import "../styles/variables.scss";
	$space: .5rem;
	.progress-bar {
		border: solid 1px $silver;
		border-radius: 2.5px;
		display: flex;
		position: relative;

		&:not(:last-child) {
			margin-bottom: 1rem;
		}
	}
	.fill {
		padding: $space;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: aliceblue;
	}
	.label {
		white-space: nowrap;
		&--right {
			right: 0;
			position: absolute;
			margin-right: $space;
		}
	}

</style>