import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue-demi'
import { vMouseInElement } from './directive'
import type { MouseInElementOptions } from '.'

const App = defineComponent({
  props: {
    onMouseInElement: {
      type: Function,
      required: true,
    },
    options: {
      type: Object,
      required: false,
    },
  },
  template: `<template>
  <div v-if="options" v-mouse-in-element="[onMouseInElement,options]">element</div>
  <div v-else v-mouse-in-element="onMouseInElement">element</div>
  </template>`,
})

describe('vMouseInElement', () => {
  let onMouseInElement = vi.fn()
  let wrapper: VueWrapper<any>

  describe('given no options', () => {
    beforeEach(() => {
      onMouseInElement = vi.fn()
      wrapper = mount(App, {
        props: {
          onMouseInElement,
        },
        global: {
          directives: {
            'mouse-in-element': vMouseInElement,
          },
        },
      })
    })

    it('should be defined', () => {
      expect(wrapper).toBeDefined()
    })
  })

  describe('given options', () => {
    beforeEach(() => {
      onMouseInElement = vi.fn()
      const options: MouseInElementOptions = {
        handleOutside: true,
      }
      wrapper = mount(App, {
        props: {
          onMouseInElement,
          options,
        },
        global: {
          directives: {
            'mouse-in-element': vMouseInElement,
          },
        },
      })
    })

    it('should be defined', () => {
      expect(wrapper).toBeDefined()
    })
  })
})
