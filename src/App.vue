<template>
  <v-app>
    <app-header></app-header>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  import AppHeader from './components/header'

  export default {
    name: 'App',
    components: {
        AppHeader
    },
    data () {
      return {
        //
      }
    }
  }
</script>
