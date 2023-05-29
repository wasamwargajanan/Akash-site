<template>
  <v-app>
    <v-navigation-drawer
    v-model="showMenu"
      absolute
       
      temporary
      class="mt-16"
       
    >
      <v-list
        nav
        dense
      > 
      <router-link
          class="sidebar-router-link d-block text-decoration-none my-1 h6"
          :to="{ name: 'Home'}"
        >
        <v-list-item>
          <v-icon>mdi-home</v-icon>
            <v-list-item-title class="pl-2">Home</v-list-item-title>
          </v-list-item>

      </router-link>  
      <router-link
          class="sidebar-router-link d-block text-decoration-none my-1 h6"
          :to="{ name: 'Services'}"
        >
        <v-list-item>
          <v-icon>mdi-developer-board</v-icon>
            <v-list-item-title class="pl-2">Services</v-list-item-title>
          </v-list-item>

      </router-link>    
          
      <router-link
          class="sidebar-router-link d-block text-decoration-none my-1"
          :to="{ name: 'Gallery'}"
        >
        <v-list-item>
          <v-icon>mdi-file-image</v-icon>
            <v-list-item-title class="pl-2">Gallery</v-list-item-title>
          </v-list-item>

      </router-link>

      <router-link
          class="sidebar-router-link d-block text-decoration-none my-1"
          :to="{ name: 'AboutUs'}"
        >
        <v-list-item>
          <v-icon>mdi-information-outline</v-icon>
            <v-list-item-title class="pl-2">About-Us</v-list-item-title>
          </v-list-item>

      </router-link>


      <router-link
          class="sidebar-router-link d-block text-decoration-none my-1"
          :to="{ name: 'ContactUs'}"
        >
        <v-list-item>
          <v-icon>mdi-contacts</v-icon>
            <v-list-item-title class="pl-2">Contact-Us</v-list-item-title>
          </v-list-item>

      </router-link>

        
      </v-list>
    </v-navigation-drawer>
    <Header @action="onAction"></Header>
    <v-content>
      <router-view class="pa-4" :class="showMenu ? 'open-scroll' : 'close-scroll'" />
       
    </v-content>
  </v-app>
</template>

<script>
 
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
     
    Header
  },

  data: () => ({
    showMenu: false,
  }),
  methods:{
    onAction: function(){
      this.showMenu = !this.showMenu
    }
  }
};
</script>
<style scoped>
.open-scroll{
  margin: 0 0 0 250px;
}
.close-scroll{
  padding: 0 ;
}
.sidebar-router-link:hover{
  background: rgb(37, 37, 37);
}
</style>
