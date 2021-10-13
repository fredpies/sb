<template>

  <BaseMonthCalendarLayout>

    <template v-slot:month-name>
      <div class="bg-grey-lighter px-2 py-2 border-solid border-grey-light border-b text-center">
        <i @click.self="prevMonth" class="fas fa-angle-left cursor-pointer text-xl hover:text-blue-400"></i>
        <span class="mx-3 inline-block">{{ monthName }} {{ currentYear }}</span>
        <i @click.self="nextMonth" class="fas fa-angle-right cursor-pointer text-xl hover:text-blue-400"></i>
      </div>

    </template>

    <tr v-for="(week, idx) in weeks" :key="idx">
      <td @click.self="emitDate" :class="[dayData.classList, dayData.activeClass]" v-for="(dayData, idx) in week" :key="idx">
        {{ dayData.day }}
      </td>
    </tr>

  </BaseMonthCalendarLayout>

</template>

<script>

import Month, {days} from 'calendar-months';
import BaseMonthCalendarLayout from "@/components/layouts/BaseMonthCalendarLayout";

export default {
  name: "BaseMonthCalendar",
  components: {BaseMonthCalendarLayout},
  props: {

    month: {
      default: () => (new Date()).getMonth() + 1
    },
    year: {
      default: () => (new Date()).getFullYear()
    }
  },
  data() {
    return {

      months: [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
      ],

      currentMonth: null,
      currentYear: null,
      monthName: null,
      weeks: []

    }
  },

  computed: {
    today() {

      const currentDate = new Date();
      const monthIndex = currentDate.getMonth();
      const year = currentDate.getFullYear().toString();

      return (this.month - 1) === monthIndex && this.year.toString() === year ? currentDate.getDate() : -1;

    }
  },

  created() {

    this.currentMonth = this.month;
    this.currentYear = this.year;
    this.getMonthDays();

  },

  methods: {
    getMonthDays() {

      this.monthName = this.months[this.currentMonth - 1];
      const weeks = (new Month(this.currentMonth - 1, this.currentYear)).calendarWeeks(days.MONDAY);
      this.weeks = [];

      const _weeks = [];

      weeks.forEach(week => {
        _weeks.push(week.map(momentDay => ({
              day: (momentDay.month() + 1).toString() === this.currentMonth.toString() ? momentDay.date() : '',
              classList: (momentDay.month() + 1).toString() === this.currentMonth.toString() ? 'py-3 px-4 text-center cursor-pointer hover:text-white hover:bg-blue-400' : 'cursor-default',
              activeClass: (momentDay.date().toString() === this.today.toString() && momentDay.month() === new Date().getMonth()) ? 'bg-gray-200' : ''
            })
        ));
      })

      this.weeks = _weeks

    },
    nextMonth() {
      this.currentMonth++;
      if (this.currentMonth > 12) {
        this.currentMonth = 1;
        this.currentYear++;
      }
      this.getMonthDays();
    },
    prevMonth() {
      this.currentMonth--;
      if (this.currentMonth < 1) {
        this.currentMonth = 12;
        this.currentYear--;
      }
      this.getMonthDays()

    },
    emitDate(ev) {

      const selectedDay = ('0' + Number(ev.target.innerHTML)).slice(-2);
      const selectedDate = `${selectedDay}-${this.currentMonth}-${this.currentYear}`;
      if (selectedDay !== '00') this.$emit('date', selectedDate);
    }
  }
}
</script>

<style scoped lang="postcss">


</style>


