<template>
	<div class="results">
		<div class="results-item" v-for="(question, index) in results" :key="index">
			<p>{{question.title}}</p>
			<progress-bar v-for="(percent, answer, i) in question.answers" :fill="percent" :label="answer" :key="i"></progress-bar>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
  import {mapGetters} from "vuex";
  import SurveyResponse from "../models/surveys/responses";
  import ProgressBar from "@/components/ProgressBar";

	export default Vue.extend({
		name: 'survey-results',
		components: {ProgressBar},
		props: {
		  responses: {
		    type: Array
		  }
		},

		mounted() {
      this.$store.dispatch('loadQuestionData')
    },

    computed: {
		  ...mapGetters(['questionsData']),

	    results() {
		    return this.questionsData.map((question, index) => new SurveyResponse({
			    title: question.title,
			    answers: this.responses[index]
		    }))
	    }
    }
  })
</script>