<template>

  <div :class="block ? 'w-full' : ''" class="form-field">

    <label :class="base.label">{{label}}</label>
    <div :class="classList" :style="{background: bgColor}">
      <input :class="base.input"
             :style="{background: bgColor, color: textColor}"
             @input="$emit('input', $event.target.value)"
             v-bind="$attrs"
             >
      <i v-if="!!icon" :class="iconClassList" class="icon text-blue-600 text-base align-middle" :style="{color: textColor}"></i>
    </div>
    <div v-if="invalid" class="error text-red-500">{{ errorMessage }}</div>
  </div>

</template>

<script>

import { base, sizes } from "@/components/config/base/BaseFormFieldConfig";

/**
 * Example base form field component
 */
export default {
  name: "BaseFormField",
  inheritAttrs: false,
  props: {
    /**
     * Sets form field label.
     */
    label: {
      type: String,
      default: value => value ? value.trim() : 'Label',
      validate: value => typeof value === 'string'
    },
    /**
     * Sets icon.
     */
    icon: {
      type: String,
      default: value => value ? value.trim() : '',
      validate: value => typeof value === 'string'
    },
    /**
     * Sets full width.
     */
    block: {
      type: Boolean,
      default: false,
      validate: value => typeof value === 'boolean'
    },
    /**
     * Sets sets size of the form field.
     */
    size: {
      type: String,
      default: value => value ? value.trim() : 'default',
      validate: value => Object.keys(this.sizes).includes(value)
    },
    /**
     * Sets invalid state.
     */
    invalid: {
      type: Boolean,
      default: false
    },
    /**
     * Sets content of the error message.
     */
    errorMessage: {
      type: String,
      default: value => value ? value.trim() : 'Invalid value',
      validate: value => typeof value === 'string'
    },
    bgColor: {
      type: String,
      default: 'transparent',
      validate: color => typeof color === 'string'
    },
    textColor: {
      type: String,
      default: '#000',
      validate: color => typeof color === 'string'
    }
  },
  data() {
    return {
      base,
      sizes
    }
  },

  methods: {
    emitInput(ev) {
      /**
       * Emits input value.
       */
      this.$emit('input', ev.target.value)
    }
  },

  computed: {

    sizeClassList() {
      return this.sizes[this.size]
    },

    invalidClassList() {
      return this.invalid ? 'border-red-400 border-2' : 'border-2'
    },

    classList() {
      return [
          this.sizeClassList,
          this.invalidClassList,
          this.base.container
      ];
    },
    iconClassList() {
      return [
          this.icon
      ]
    }
  },





}
</script>

<style scoped>

  .icon {
    line-height: inherit;
  }

</style>
