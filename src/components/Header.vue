<template>
    
        <v-app-bar
      app
      dark
      :clipped-left="$vuetify.breakpoint.mdAndUp"
    >
    <v-app-bar-nav-icon @click="MenuAction"></v-app-bar-nav-icon>   
    <v-spacer class="d-md-none"></v-spacer>  
    <h2>Amber Glowsign</h2>

    <div class="ml-10 d-none d-md-block">
        <span class="nav-content">Services</span>
        <span class="nav-content px-4">Gallery</span>
        <span class="nav-content">About Us</span>
        <span class="nav-content pl-4">Contact Us</span>
    </div>

    <v-spacer></v-spacer>
    <div class="d-none d-md-block">
        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
    </v-app-bar>
        
    
   
      
      
      
 
    
</template>

<script>
export default {
    name:'HeaderVue',

    data(){
        return {

        }
    },
    methods:{
        MenuAction: function(){
            this.$emit('action')
        }
    }
}
</script>
<style scoped>
.nav-content{
    cursor: pointer;
  }
  .nav-content:hover{
    color: rgb(112, 113, 124);
  }
</style>


