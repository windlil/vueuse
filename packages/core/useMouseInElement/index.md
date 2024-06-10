---
category: Elements
---

# useMouseInElement

Reactive mouse position related to an element

## Usage

```vue
<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<template>
  <div ref="target">
    <h1>Hello world</h1>
  </div>
</template>
```

## Component Usage

```vue
<template>
  <UseMouseInElement v-slot="{ elementX, elementY, isOutside }">
    x: {{ elementX }}
    y: {{ elementY }}
    Is Outside: {{ isOutside }}
  </UseMouseInElement>
</template>
```

## Directive Usage

```vue
<script setup lang="ts">
import type { UseMouseInElementReturn } from '@vueuse/core'
import { reactive } from 'vue'
import { vMouseInElement } from '@vueuse/components'

const _state = reactive<any>({})
function onMouseInElementHandler(state: UseMouseInElementReturn) {
  _state.elementX = state.elementX
  _state.elementY = state.elementY
}
</script>

<template>
  <div>
    <div v-mouse-in-element="onMouseInElementHandler" />

    <!-- with options -->
    <div v-mouse-in-element="[onMouseInElementHandler, { handleOutside: true }]" />
    {{ _state }}
  </div>
</template>
```
