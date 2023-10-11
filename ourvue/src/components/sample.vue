<style>
/* Import your CSS files here */
  @import '@/assets/assets/css/style.css';
  @import '@/assets/assets/css/bootstrap.min.css';
  @import '@/assets/assets/css/tiny-slider.css';
  @import '@/assets/assets/css/humberger.css';
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>

<script>
  export default {
    name: "Style",
  mounted() {
      this.loadScripts();
  },
  methods: {
      loadScripts() {
        const scriptUrls = [
        '/public/js/bootstrap.bundle.min.js',
        '/public/js/custom.js',
        '/public/js/tiny-slider.js',

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
  };
</script>
