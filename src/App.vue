<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <img src="@/assets/logo-ecorecycler.jpeg" width="300" height="150">

      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click="goTo(item.to)"
        >
          <v-list-tile-action>
            <img :src="'/static/icons/'+item.icone+'.png'" height="40">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
      style="margin-left: 500px;margin-top: 20px"
      label="Português"
      v-model="locale"
      ></v-switch>
      <!-- <v-icon :color="locale == 'pt' ? '' : 'yellow darken-1'" @click.stop="locale = locale == 'pt' ? 'es' : 'pt'">language</v-icon> -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      locale: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icone: 'mapa',
        title: 'Mapa',
        to: '/'
      }, {
        icone: 'carroca',
        title: 'Catadores',
        to: 'catadores'
      }, {
        icone: 'recicladora',
        title: 'Recicladoras',
        to: 'recicladoras'
      }],
      miniVariant: false,
      right: true,
      title: 'Eco-Recycler Amazonic'
    }
  },
  name: 'App',
  methods: {
    goTo(to){
      this.$router.push(to)
    }
  },
  watch: {
    locale(val){
      if(val)
        this.$i18n.locale = 'pt'
      else
        this.$i18n.locale = 'es'
    }
  }
}
</script>
