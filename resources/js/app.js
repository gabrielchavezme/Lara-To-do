/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 2000
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    created() {
        this.getTasks();
    },
    data: {
        tasks: [],
        errors: [],
        task: '',
    },
    methods: {
        getTasks: function () {
            
            var urlTasks = 'tasks';
            axios.get(urlTasks).then(response => {
                this.tasks = response.data
            });
        },
        completeTask: function (task) {
            var urlComplete = 'tasks/' + task.id;
            axios.delete(urlComplete).then(response => {
                this.getTasks();
                this.$toastr('success', 'Tarea completada correctamente.', 'Exito');
            });
            
        },
        addTask: function () {
            if (this.task !== '') {
                var urlAdd = 'tasks';
                axios.post(urlAdd, {
                    task: this.task
                }).then(response => {
                    this.getTasks();
                    this.task = '';
                    this.errors = [];
                    this.$toastr('success','Tu tarea ha sido guardada correctamente.','Exito');
                }).catch(error => {

                    console.log(error.response.data);

                });
            }
            else {
                this.$toastr('error','Tienes que ingresar una tarea.','Error');
            }
        },
    },
});
