<template>
    <man/>
</template>
<script>
import man from '../components/manage/man.vue';
 export default {
    name: 'ManagePage',
    components: {
       man
    },
    mounted() {
        this.loadScripts();
    },
    methods: {
        loadScripts() {
            const scriptUrls = [
            // 'manpub/vendors/chart.js/Chart.min.js',
            // 'manpub/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js',
            // 'manpub/vendors/progressbar.js/progressbar.min.js',
            'manpub/js/off-canvas.js',
            'manpub/js/hoverable-collapse.js',
            'manpub/js/template.js',
            'manpub/js/settings.js',
            'manpub/js/todolist.js',
            'manpub/js/jquery.cookie.js',
            'manpub/js/dashboard.js',
            'manpub/js/Chart.roundedBarCharts.js',
            ];
            const head = document.getElementsByTagName('head')[0];
            scriptUrls.forEach((scriptUrl) => {
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                head.appendChild(script);
            });
        },
    },
  }
</script>

<style>
@import url('https://www.bootstrapdash.com/product/star-admin-pro/?utm_source=organic&utm_medium=banner&utm_campaign=buynow_demo');
@import url('https://www.bootstrapdash.com/product/star-admin-pro/');
@import url('http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html');
@import url('https://www.bootstrapdash.com/');
@import'@/assets/assets/manass/vendors/feather/feather.css';
@import'@/assets/assets/manass/vendors/mdi/css/materialdesignicons.min.css';
@import'@/assets/assets/manass/vendors/ti-icons/css/themify-icons.css';
@import'@/assets/assets/manass/vendors/typicons/typicons.css';
@import'@/assets/assets/manass/vendors/simple-line-icons/css/simple-line-icons.css';
@import'@/assets/assets/manass/vendors/css/vendor.bundle.base.css';
/* @import'@/assets/assets/manass/vendors/datatables.net-bs4/dataTables.bootstrap4.css'; */
@import'@/assets/assets/manass/js/select.dataTables.min.css'; 

</style>