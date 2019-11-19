<template>
	<div class="results">
		<div class="results-item" v-for="(question, index) in results" :key="index">
			<p>{{question.title}}</p>
			<progress-bar v-for="(answer, i) in question.answers" :fill="answer.value" :label="answer.text" :key="i"></progress-bar>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
  import {mapGetters} from "vuex";
	import SurveyResponse, {SurveyAnswer} from "../models/surveys/responses";
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
			    answers: Object.entries(this.responses[index]).map(entry => new SurveyAnswer(entry, this.questionsData[index].answers))
		    }))
	    }
    }
  })
</script>

<style>
    .results {
        padding: 1rem;
    }
</style>