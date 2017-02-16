import Vue from 'vue';
import VueResource from 'vue-resource';
import _ from 'jquery';
import _ from 'bootstrap';
import Io from 'socket.io-client';


import TestComponent1 from './components/testComponent1.vue'
import TestComponent2 from './components/testComponent2.vue'

import 'bootstrap/dist/css/bootstrap.css';
import './css/global.css';

window.io = Io.connect();
Vue.use(VueResource);
new Vue({
  el: '#testComponent1',
  render: h => h(TestComponent1)
});
new Vue({
  el: '#testComponent2',
  render: h => h(TestComponent2)
});

