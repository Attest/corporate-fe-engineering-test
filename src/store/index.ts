import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../questions'
import NavigationItem from "@/models/navigation/item";
import Question from "@/models/questions/questions";
import Department, {DepartmentMap} from "@/models/department/department";

Vue.use(Vuex)

let currentDepartment: DepartmentMap = {}
let navigationItems: NavigationItem[] = []
let questions: Question[] = []

export default new Vuex.Store({
  state: {
    navigationItems,
    currentDepartment,
    questions,
  },
  mutations: {
    setNavigationItems(state, data) {
      state.navigationItems = data
    },
    setDepartmentData(state, data) {
      state.currentDepartment = data
    },
    setQuestionData(state, data) {
      state.questions = data
    }
  },
  actions: {
    loadNavigation({ commit }): void {
      let departments: DepartmentMap = Data.departments
      const navItems = Object.keys(departments).map((deptName: keyof DepartmentMap) => new NavigationItem({
        text: departments[deptName].name.toString(),
        link: deptName.toString()
      }))
      commit('setNavigationItems', navItems)
    },

    loadDepartmentData({ commit, dispatch }, department: keyof DepartmentMap) {
      let departments: DepartmentMap = Data.departments
      let deptData: Department = departments[department]
      if (deptData) {
        commit('setDepartmentData', deptData)
      } else {
        throw Error('No suc department')
      }
    },

    loadQuestionData({commit}) {
      const questions = Data.questions.map(question => new Question(question))
      commit('setQuestionData', questions)
    }
  },
  getters: {
    navigationItems(state) {
      return state.navigationItems
    },
    departmentData(state) {
      return state.currentDepartment
    },
    questionsData(state){
      return state.questions
    }
  },
  modules: {
  }
})
