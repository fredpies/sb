<template>
    <div :class="base.container">

      <div :class="base.header" class="card-header">
          <!-- @slot Card header -->
          <slot name="header"></slot>
      </div>

      <div :class="base.body" class="card-body">
        <!-- @slot Card contents -->
        <slot></slot>
      </div>

      <div :class="base.footer" class="card-footer">
          <!-- @slot Card footer -->
          <slot name="footer"></slot>
      </div>

    </div>
</template>

<script>

import { base } from "@/components/config/base/BaseCardConfig";

/**
 * Example base card component.
 */
export default {
  name: "BaseCard",
  data() {
    return {
      base
    }
  }
}
</script>

<style scoped>

</style>
