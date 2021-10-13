<template>
  <Component
      @click.self="emitClick"
      :is="isAnchor ? 'a' : 'button'"
      :class="classList"
  >

    <!-- @slot Label of the button. -->
    <slot></slot>

  </Component>
</template>

<script>

import { base, sizes, variants } from "@/components/config/base/BaseButtonConfig";

/**
 * Example base button component.
 */
export default {
  name: "BaseButton",
  data() {
    return {
      variants,
      sizes,
      base,
    }
  },
  props: {
    /**
     * Sets button to be rendered as a block.
     */
    block: {
      type: Boolean,
      default: false,
      validate: value => typeof value === 'boolean'
    },
    /**
     * Sets button to be rendered as an anchor element.
     */
    isAnchor: {
      type: Boolean,
      default: false,
      validate: value => typeof value === 'boolean'
    },
    /**
     * Variant of a button (default | primary | secondary | danger | info).
     */
    variant: {
      type: String,
      default: value => value ? value.trim() : 'default',
      validate: value => Object.keys(this.variants).includes(value)
    },
    /**
     * Size of a button (default | small | big)
     */
    size: {
      type: String,
      default: value => value ? value.trim() : 'default',
      validate: value => Object.keys(this.sizes).includes(value)
    },
    /**
     * Value emitted with "click" event.
     */
    value: {
      type: String,
      default: value => value || '',
    }
  },
  methods: {

    emitClick() {
      /**
       * Emits value after clicking on the button.
       */
      this.$emit('click', this.value)
    }
  },
  computed: {
    variantClassList() {
      return this.variants[this.variant === 'default' ? 'primary' : this.variant]
    },

    sizeClassList() {
      return this.sizes[this.size]
    },

    classList() {
      return [
        this.block ? 'block w-full' : 'inline-block',
        this.variantClassList,
        this.sizeClassList,
        this.base
      ];
    }
  }
}

</script>

