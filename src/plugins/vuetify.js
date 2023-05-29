import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2850DA',
        contentColor: '#1d1d1d'
      },
    },
    dark: true
  }
});
