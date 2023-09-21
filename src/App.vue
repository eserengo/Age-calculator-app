<template>
  <main class="bg-White p-8 rounded-2xl divide-y" style="border-bottom-right-radius: 6rem;">
    <section class="pb-12 md:pe-20">
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4 relative">
        <div v-for="(input, index) in inputsArray" :key="`input_${index}`">
          <label
            :for="input.id"
            class="font-bold text-sm"
            :class="input.hasError ? 'text-LightRed' : input.isValidated ? 'text-LightGreen' : 'text-OffBlack'">
            {{ (input.label).toUpperCase() }}
          </label>
          <br>
          <input
            v-model="input.value"
            class="border rounded w-24 p-2 font-bold text-OffBlack text-xl"
            :class="input.hasError ? 'border-LightRed' : input.isValidated ? 'border-LightGreen' : 'border-OffBlack'"
            :id="input.id"
            :type="input.type"
            :placeholder="input.placeholder">
          <br>
          <span v-show="input.hasError" class="text-LightRed text-xs">{{ input.msg }}</span>
        </div>
        <button
          type="submit"
          class="bg-transparent absolute max-md:left-1/2 max-md:-translate-x-1/2 md:-right-20 -bottom-20">
          <img
            src="./assets/images/icon-arrow.svg"
            alt="arrow icon"
            class="bg-OffBlack hover:bg-Purple border rounded-full p-3">
        </button>
      </form>
    </section>

    <section class="flex flex-col-reverse gap-2 pt-12">
      <h2
        v-for="(input, index) in inputsArray"
        :key="`result_${index}`"
        class="text-4xl sm:text-5xl md:text-6xl font-bold italic text-OffBlack">
        <span class="text-Purple">{{ input.isValidated ? input.result : "- -" }}</span>
        {{ input.label + "s" }}
      </h2>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      date: new Date(),

      inputsArray: [
        {
          id: 1,
          type: "number",
          min: 1,
          max: 31,
          label: "day",
          placeholder: "DD",
          value: "",
          result: "",
          isValidated: false,
          hasError: false,
          msg: "",
        },
        {
          id: 2,
          type: "number",
          min: 1,
          max: 12,
          label: "month",
          placeholder: "MM",
          value: "",
          result: "",
          isValidated: false,
          hasError: false,
          msg: "",
        },
        {
          id: 3,
          type: "number",
          min: 1900,
          max: 2023,
          label: "year",
          placeholder: "YYYY",
          value: "",
          result: "",
          isValidated: false,
          hasError: false,
          msg: "",
        },
      ],
    }
  },

  methods: {
    handleSubmit() {
      this.inputsArray.forEach(item => {
        if (!item.value) {
          item.msg = "This field is required";
          return item.hasError = true;
        } else if ((item.value < item.min) || (item.value > item.max)) {
          item.msg = `Must be a valid ${item.label}`;
          return item.hasError = true;
        } else {
          this.calculate()
          item.hasError = false;
          return item.isValidated = true;
        }
      })
    },

    calculate() {
      this.inputsArray[2].result = this.date.getFullYear() - this.inputsArray[2].value;

      if ((this.date.getMonth() + 1) >= this.inputsArray[1].value) {
        this.inputsArray[1].result = (this.date.getMonth() + 1) - this.inputsArray[1].value;
      } else {
        this.inputsArray[2].result--;
        this.inputsArray[1].result = 12 + (this.date.getMonth() + 1) -this.inputsArray[1].value;
      }

      if (this.date.getDate() >= this.inputsArray[0].value) {
        this.inputsArray[0].result = this.date.getDate() - this.inputsArray[0].value;
      } else {
        this.inputsArray[1].result--;
        this.inputsArray[0].result = 31 + this.date.getDate() - this.inputsArray[0].value;

        if (this.inputsArray[1].result < 0) {
          this.inputsArray[1].result = 11;
          this.inputsArray[2].result--;
        }
      }
    },
  },
}
</script>