<template>
  <div class="turf-select">
    <span 
      aria-label="A button to open the select options"
      class="turf-select--selected"
      :class="{
        'turf-select--selected-focused': selectOpen
      }"
      @click="selectOpen = !selectOpen"
    >
      {{ value }}
      <img 
        class="turf-select--arrow"
        :class="{
          'turf-select--arrow-up': selectOpen
        }"
        :src="chevronDown" 
        alt="A triangle image indicating if the select is open or closed.">
    </span>
    <ul 
      v-if="selectOpen"
      class="turf-select--option-container"
    >
      <li
        class="turf-select--option"
        :class="{
            'turf-select--option-selected': item === value
          }"
        v-for="(item, index) in listItems"
        :key="index"
        @click="handleSelectChange(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    listItems: {
      type: Array,
      default: []
    },
    value: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      selectOpen: false,
      chevronDown: require('../assets/images/chevron-down.svg')
    }
  },
  methods: {
    handleSelectChange: function (item) {
      this.$emit('change', item)
      this.$emit('input', item)
      this.selectOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

$lightBlue: lighten($color: $blue, $amount: 40%);
$select: ".turf-select";

#{$select} {
  height: 1.3rem;
  min-width: 100px;
  font-size: 0.8rem;
}

#{$select}--selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 1px 1px $grey;
  border-radius: 4px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 0px 1px 1px $lightBlue;
    cursor: pointer;
  }
}

#{$select}--selected-focused {
  box-shadow: 0px 0px 4px 0px $lightBlue !important;
}

#{$select}--arrow {
  width: 1rem;
}

#{$select}--arrow-up {
  transform: rotateZ(180deg);
}

#{$select}--option-container {
  margin: 0;
  padding: 4px 0;
  list-style: none;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px 0px $lightBlue;

  position: relative;
  top: 8px;
}

#{$select}--option {
  width: 100%;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: $grey;
  }
}

#{$select}--option-selected {
  background-color: $lightBlue !important;
  color: #FFFFFF;
}
</style>