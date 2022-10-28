// import Vue from "../../node_modules/vue";
import Vue from 'vue';
import exampleComponent from './components/Example.vue'


const app = new Vue({
    el: '#app',
    components:{
       exampleComponent
    }
 });

$(document).ready(() => {
console.log('scas')
})
