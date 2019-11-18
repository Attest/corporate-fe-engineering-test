import Vue from 'vue'
import Vuex from 'vuex'
import Data from '../questions'
import NavigationItem from "@/models/navigation/item";
import Department, {DepartmentMap} from "@/models/department/department";

Vue.use(Vuex)

const navigationItems: NavigationItem[] = []
const currentDepartment: DepartmentMap = {}
export default new Vuex.Store({
  state: {
    navigationItems,
    currentDepartment
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

    loadDepartmentData({ commit }, department: keyof DepartmentMap) {
      let departments: DepartmentMap = Data.departments
      let deptData: Department = departments[department]
      if (deptData) {
        commit('setDepartmentData', deptData)
      } else {
        throw Error('No suc department')
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
