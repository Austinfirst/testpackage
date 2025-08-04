<template>
  <div class="counter-container">
    <button 
      class="counter-btn decrement" 
      @click="decrement"
      :disabled="modelValue <= min"
    >
      -
    </button>
    <span class="counter-value">{{ modelValue }}</span>
    <button 
      class="counter-btn increment" 
      @click="increment"
      :disabled="modelValue >= max"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { defineProps, emit } from 'vue'

// 定义组件属性
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: -Infinity
  },
  max: {
    type: Number,
    default: Infinity
  },
  step: {
    type: Number,
    default: 1
  }
})

// 定义事件
const emit = emit()

// 减少数值
const decrement = () => {
  const newValue = props.modelValue - props.step
  emit('update:modelValue', Math.max(newValue, props.min))
}

// 增加数值
const increment = () => {
  const newValue = props.modelValue + props.step
  emit('update:modelValue', Math.min(newValue, props.max))
}
</script>

<style scoped>
.counter-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.counter-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s;
}

.counter-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.decrement {
  background-color: #f0f0f0;
}

.decrement:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.increment {
  background-color: #42b983;
  color: white;
}

.increment:hover:not(:disabled) {
  background-color: #359e75;
}

.counter-value {
  min-width: 40px;
  text-align: center;
  font-size: 16px;
}
</style>
    