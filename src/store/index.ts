import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../questions'
import NavigationItem from "@/models/navigation/item";

Vue.use(Vuex)

const navigationItems: NavigationItem[] = []

export default new Vuex.Store({
  state: {
    navigationItems,
    currentDepartment: {}
  },
  mutations: {
    setNavigationItems(state, data) {
      state.navigationItems = data
    },
    setDepartmentData(state, data) {
      state.currentDepartment = data
    }
  },
  actions: {
    loadNavigation({ state, commit }) {
      const navItems = Object.values(Data.departments).map((dept, i) => new NavigationItem({
        text: dept.name,
        link: Object.keys(Data.departments)[i]
      }))
      commit('setNavigationItems', navItems)
    },

    loadDepartmentData({ state, commit }, department) {
      const index = Object.keys(Data.departments).indexOf(department)
      let deptData
      if (index > -1) {
        deptData = Object.values(Data.departments)[index]
      }
      if (deptData) {
        commit('setDepartmentData', deptData)
      }

    }
  },
  getters: {
    navigationItems(state) {
      return state.navigationItems
    },
    departmentData(state) {
      return state.currentDepartment
    }
  },
  modules: {
  }
})
