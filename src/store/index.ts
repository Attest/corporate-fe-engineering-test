import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../questions'
import NavigationItem from "@/models/navigation/item";
import {DepartmentMap} from "@/models/department/department";

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
    loadNavigation({ commit }) {
      let departments: DepartmentMap = Data.departments
      const navItems = Object.keys(departments).map((deptName: keyof DepartmentMap) => new NavigationItem({
        text: departments[deptName].name.toString(),
        link: deptName.toString()
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
