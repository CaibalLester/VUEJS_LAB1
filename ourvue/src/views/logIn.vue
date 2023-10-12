<template>
  <div class="container">
    <div class="form-container">
      <button id="loginBtn">Login</button>
      <button id="signupBtn">Sign Up</button>
      <form id="loginForm">
        <input type="text" placeholder="Username" id="loginUsername">
        <input type="password" placeholder="Password" id="loginPassword">
        <button type="submit">Login</button>
      </form>
      <form id="signupForm" style="display: none;">
        <input type="text" placeholder="Username" id="signupUsername">
        <input type="password" placeholder="Password" id="signupPassword">
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>
<style>
@import '../assets/assets/css/log.css';
</style>

<script>
export default {
  name: 'LogInPage',
  mounted() {
    this.loadScripts();
},
methods: {
    loadScripts() {
      const scriptUrls = [
       '/public/js/log.js'
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