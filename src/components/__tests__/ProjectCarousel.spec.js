import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectCarousel from '../ui/ProjectCarousel.vue'

describe('ProjectCarousel', () => {
  it('renders slot content and cycles between slides', async () => {
    const wrapper = mount(ProjectCarousel, {
      props: {
        slides: [{ name: 'First' }, { name: 'Second' }]
      },
      slots: {
        default: ({ currentIndex }) => `<p class="active-index">${currentIndex}</p>`
      }
    })

    expect(wrapper.text()).toContain('0')

    await wrapper.find('.togglepage').trigger('click')
    expect(wrapper.text()).toContain('1')

    await wrapper.find('.togglepagep').trigger('click')
    expect(wrapper.text()).toContain('0')
  })
})
