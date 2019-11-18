import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Page.vue'

describe('Page.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Main)
    expect(wrapper.text()).toMatch("Hello World")
  })
})
