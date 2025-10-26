<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  href?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  type: "button",
})

const baseClasses =
  "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
  secondary: "bg-white text-primary hover:bg-gray-100 focus:ring-primary",
  outline: "border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white",
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-base rounded-full",
  lg: "px-8 py-3 text-lg rounded-full",
}

const buttonClasses = [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  "transition-all duration-200 ease-in-out cursor-pointer",
].join(" ")
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :disabled="!href ? disabled : undefined"
    :class="buttonClasses"
  >
    {{ label || "" }}
    <slot />
  </component>
</template>
