<template>
  <div id="app">
    <transition name="slide">
      <aside 
        class="sideCol"
        v-if="showSidebar"
      >
        <sidebar 
          :modules="modules" 
          v-on:changeModule="setModule"
        />
      </aside>
    </transition>
    <main>
        <topbar @toggleSidebar="showSidebar = !showSidebar"/>
        <nuxt/>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
import config from '../assets/config.json'

export default {
  name: 'app',
  components: {
    Sidebar,
    Topbar
  },
  data () {
    return {
      selectedModuleName: 'along',
      modules: config.modules,
      showSidebar: false
    }
  },
  computed: {
    selectedModule: function () {
      return {}
    },
    isDocsPage: function () {
      return this.$route.name === 'docs'
    }
  },
  methods: {
    setModule: function (newName) {
      location.hash = newName
      this.selectedModuleName = newName
    }
  },
  mounted: function () {
    this.showSidebar = window.innerWidth > 1200
  }
}
</script>

<style lang="scss">
  @import "../styles/default.scss";
  @import "../styles/variables.scss";

  #app {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: $grey;
  }

  .hljs {
    background-color: #FFFFFF !important;
    padding: 20px 20px 0px!important;
  }

  aside {
    min-height: 100vh;
    width: 270px;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 20px 0 40px;
    width: 60%;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  @media (max-width: 900px) {
    main {
      margin: 0;
    }
  }
</style>