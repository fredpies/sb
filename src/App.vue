<template>
  <div id="app">
    <base-form-field icon="fa fa-calendar"></base-form-field>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/tailwind.css'

import BaseFormField from "@/components/base/BaseFormField";

export default {
  name: 'App',
  components: {BaseFormField },


}
</script>

<style>

</style>
