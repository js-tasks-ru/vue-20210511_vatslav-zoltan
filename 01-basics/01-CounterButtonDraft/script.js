import Vue from './vendor/vue.esm.browser.js';

var app = new Vue({
    el: '#app',
    data: {
      count: 0
    },
    methods: {
        incrementCount() {
            this.count++;
        }
    }
  })
