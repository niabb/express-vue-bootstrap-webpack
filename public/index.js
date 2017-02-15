import Vue from 'vue';
import _ from 'vue-resource';
import _ from 'jquery';
import _ from 'bootstrap';

import TestComponent1 from '../views/components/testComponent1.vue'
import TestComponent2 from '../views/components/testComponent2.vue'

import 'bootstrap/dist/css/bootstrap.css';

new Vue({
  el: '#testComponent1',
  render: h => h(TestComponent1)
});
new Vue({
  el: '#testComponent2',
  render: h => h(TestComponent2)
});