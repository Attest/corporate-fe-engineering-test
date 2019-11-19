import {shallowMount, createLocalVue} from '@vue/test-utils'
import App from '@/App.vue'
import Vuex from 'vuex'
import Navigation from "@/components/Navigation.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  let actions: any
  let store
  let getters
  let state: any
  let mutations: any
    state = {
      currentDepartment: {},
      navigationItems: [],
      questions: [],
    }
    actions = {
      loadNavigation: jest.fn(),
      loadDepartmentData: jest.fn(),
      loadQuestionData: jest.fn(),
    }

    mutations = {
      setNavigationItems: jest.fn(),
      setDepartmentData: jest.fn(),
      setQuestionData: jest.fn()
    }

    getters = {
      navigationItems: jest.fn(),
      departmentData: jest.fn(),
      questionsData: jest.fn()
    }

    store = new Vuex.Store({
      actions,
      state,
      getters,
      mutations
    })

  const wrapper = shallowMount(App, {store, localVue})

  it('has correct id attribute', () => {
    expect(wrapper.attributes('id')).toBe('app')
  })

  it('calls to loadNavigation action when mounted', () => {
    expect(actions.loadNavigation).toHaveBeenCalled()
  })

  it('loads department data when navigating', () => {
    wrapper.find(Navigation).vm.$emit('navigate', 'test')
    expect(actions.loadDepartmentData).toHaveBeenCalled()
  })
})
