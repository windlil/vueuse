import type { ObjectDirective } from 'vue-demi'
import { directiveHooks } from '@vueuse/shared'
import type { MouseInElementOptions, UseMouseInElementReturn } from '.'
import { useMouseInElement } from '.'

type BindingValueFunction = (state: UseMouseInElementReturn) => void
type BindingValueArray = [BindingValueFunction, MouseInElementOptions]

export const vMouseInElement: ObjectDirective<
HTMLElement,
BindingValueFunction | BindingValueArray
> = {
  [directiveHooks.mounted](el, binding) {
    if (typeof binding.value === 'function') {
      const handler = binding.value
      handler(useMouseInElement(el))
    }
    else {
      const [handler, options] = binding.value
      handler(useMouseInElement(el, options))
    }
  },
}
