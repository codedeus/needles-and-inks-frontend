<script setup lang="ts">
import { Icon } from "@iconify/vue"

interface ButtonOption {
  label: string
  value: string | number
  disabled?: boolean
  icon?: string
}

interface Props {
  /** The currently selected value */
  modelValue: string | number
  /** Array of button options */
  options: ButtonOption[]
  /** Size variant of the button group */
  size?: "sm" | "md" | "lg"
  /** Color variant */
  variant?: "primary" | "secondary" | "outline"
  /** Whether buttons should take full width */
  fullWidth?: boolean
  /** Allow multiple selections */
  multiple?: boolean
}

interface Emits {
  "update:modelValue": [value: string | number]
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "primary",
  fullWidth: false,
  multiple: false,
})

const emit = defineEmits<Emits>()

const handleSelect = (value: string | number) => {
  if (props.multiple) {
    // Handle multiple selection logic if needed
    // For now, just emit the single value
    emit("update:modelValue", value)
  } else {
    emit("update:modelValue", value)
  }
}

const isSelected = (value: string | number) => {
  return props.modelValue === value
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

const getButtonClasses = (option: ButtonOption) => {
  const selected = isSelected(option.value)
  const baseClasses =
    "relative inline-flex items-center justify-center cursor-pointer font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"

  let variantClasses = ""

  if (props.variant === "primary") {
    if (selected) {
      variantClasses = "bg-primary text-white border-primary focus:ring-primary z-10"
    } else {
      variantClasses = "bg-background-alt text-gray-700 border-gray-300 hover:bg-background-alt focus:ring-primary"
    }
  } else if (props.variant === "secondary") {
    if (selected) {
      variantClasses = "bg-gray-100 text-gray-900 border-gray-300 focus:ring-gray-500 z-10"
    } else {
      variantClasses = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500"
    }
  } else if (props.variant === "outline") {
    if (selected) {
      variantClasses = "bg-indigo-50 text-primary-dark border-indigo-200 focus:ring-primary z-10"
    } else {
      variantClasses = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-primary"
    }
  }

  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses,
    props.fullWidth ? "flex-1" : "",
    option.disabled ? "opacity-50 cursor-not-allowed" : "",
  ]
    .filter(Boolean)
    .join(" ")
}

const getPositionClasses = (index: number, total: number) => {
  if (total === 1) return "rounded-full border"
  if (index === 0) return "rounded-l-full border border-r-0"
  if (index === total - 1) return "rounded-r-full border"
  return "border border-r-0"
}
</script>

<template>
  <div
    class="inline-flex"
    :class="{
      'w-full': fullWidth,
    }"
    role="group"
    aria-label="Button group"
  >
    <button
      v-for="(option, index) in options"
      :key="option.value"
      type="button"
      :disabled="option.disabled"
      :class="[getButtonClasses(option), getPositionClasses(index, options.length)]"
      :aria-pressed="isSelected(option.value)"
      @click="handleSelect(option.value)"
    >
      <Icon v-if="option.icon" :icon="option.icon" class="mr-2 h-4 w-4" />
      {{ option.label }}
    </button>
  </div>
</template>
