import { createApp } from 'vue'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import router from './router'

describe('App', () => {
  it('renders without crashing', () => {
    const app = createApp(App)
    app.use(router)
    const wrapper = mount(app)
    expect(wrapper.exists()).toBe(true)
  })
})
