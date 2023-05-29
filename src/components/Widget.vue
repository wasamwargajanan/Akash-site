<template>
    <v-card no-body :class="{ widget: true, className }" flat>
      <v-expansion-panels flat v-model="panel" :value="panel">
        <v-expansion-panel>
          <v-expansion-panel-header class="background-light-grey" v-on:click="expandOrCollapse">
            <div class="px-2" v-html="title"></div>
            <slot name="header-controls"></slot>
            <template v-slot:actions>
              <v-icon class="px-4">mdi mdi-chevron-double-down</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content>
            <v-card-text class="px-0 widget-card-text">
              <slot name="body"></slot>
              <slot name="footer"></slot>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "WidgetVue",
    data() {
      return {
        panel: localStorage.getItem(`widget-${this.name}-expanded`) == 1 ? 1 : 0
      };
    },
    props: {
      name: { type: String, default: "unspecified" },
      customHeader: { type: Boolean, default: false },
      minifiedHeader: { type: Boolean, default: true },
      tooltipPlacement: { default: "top" },
      showTooltip: { type: Boolean, default: false },
      close: { type: [Boolean, String], default: false },
      collapsable: { type: [Boolean, String], default: true },
      settings: { type: [Boolean, String], default: false },
      settingsInverse: { type: Boolean, default: false },
      refresh: { type: [Boolean, String], default: false },
      className: { default: "" },
      title: { default: "" },
      customControls: { default: null },
      bodyClass: { default: "" },
      options: { default: () => ({}) }
    },
    created() {},
  
    mounted() {},
  
    methods: {
      expandOrCollapse() {
        if (this.name != "unspecified") {
          let ss = localStorage.getItem(`widget-${this.name}-expanded`);
          if (ss == 1) ss = 0;
          else ss = 1;
  
          const ws = `widget-${this.name}-expanded`;
          localStorage.setItem(ws, ss);
        }
      }
    }
  };
  </script>
  
  <style src="./Widget.scss" lang="scss" />
  