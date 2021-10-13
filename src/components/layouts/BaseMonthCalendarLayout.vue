<template>
  <div class="month-calendar-layout">
    <div class="w-auto mx-3 my-3 border-solid border-grey-light rounded border shadow-md">
      <slot name="month-name"></slot>

      <div>
        <table class="w-full">
          <tbody>
          <tr class="border-b">
            <th class="py-3 px-4">P</th>
            <th class="py-3 px-4">W</th>
            <th class="py-3 px-4">Ś</th>
            <th class="py-3 px-4">C</th>
            <th class="py-3 px-4">P</th>
            <th class="py-3 px-4">S</th>
            <th class="py-3 px-4">N</th>
          </tr>

          <slot></slot>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseMonthCalendarLayout"
}
</script>

<style scoped lang="postcss">
.month-calendar-layout {
  width: 400px;
}
</style>
