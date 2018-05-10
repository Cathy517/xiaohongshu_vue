import Vue from 'vue';
Vue.filter('filterContent', (value) => {
    if (!value) return '';
    return value.split('\n');
})