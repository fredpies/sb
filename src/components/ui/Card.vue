<template>
  <div class="card">

    <BaseCard>

      <template v-slot:header>
        <a href="#">
          <img class="rounded-t-lg" src="https://placeimg.com/640/480/arch" alt="image">
        </a>
        <a href="#">
          <h5 class="px-5 pt-5 text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
        </a>
      </template>

      <p class="font-normal text-gray-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus modi non possimus quis tempore.</p>

      <template v-slot:footer>
        <BaseButton value="Read More" block variant="info">Read More</BaseButton>
      </template>

    </BaseCard>

  </div>
</template>

<script>

import BaseCard from "@/components/base/BaseCard";
import BaseButton from "@/components/base/BaseButton";

export default {
  name: "Card",
  components: { BaseCard, BaseButton }
}
</script>

<style scoped>

</style>
