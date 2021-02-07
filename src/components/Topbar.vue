<template>
  <header ref="header">
    <button type="button" @click="() => $emit('toggleSidebar')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="hamburguerLogo">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="13" x2="21" y2="13"></line>
        <line x1="3" y1="20" x2="21" y2="20"></line>
      </svg>
    </button>
    <github/>
  </header>
</template>

<script>
import Github from '../components/Github.vue'

export default {
  name: 'Topbar',
  components: {
    Github
  },
  mounted: function () {
    const debouncedScroll = () => setTimeout(() => {
      this.$refs.header.style.opacity = window.scrollY ? 0.75 : 1
    }, 200)

    window.addEventListener('scroll', debouncedScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: $grey;
    transition: 0.2s;

    button {
      cursor: pointer;
      margin-left: 30px;
      border: none;
      outline: none;
    }
  }

  .hamburguerLogo {
    width: 32px;
    height: 32px;

    line {
      color: transparentize($blue, 0.4);
      transition: 0.3s;
    }

    &:hover line {
      color: $green;
    }
  }
</style>