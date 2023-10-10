<template>
    <div class="login-container">
      <h2>Login Form</h2>
      <form action="/action_page.php" method="post">
        <div class="imgcontainer">
          <!-- Replace the image source with your actual image -->
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
        </div>
  
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
  
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
  
          <button type="submit">Login</button>
        </div>
  
        <div class="container" style="background-color:#f1f1f1">
          <span class="psw">Create new <a href="/signup">account?</a></span>
        </div>
      </form>
    </div>
  </template>
  
  <style>
  /* Reset default margin and padding for the body */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f1f1f1; /* Set a background color for the page */
  }
  
  /* Center the form on the page */
  .login-container {
    text-align: center;
    margin: 0 auto;
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border: 3px solid #f1f1f1;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Style form elements */
  .container {
    padding: 16px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 0; /* Adjust padding to vertically center the text */
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  /* Position the "Create new account?" link at the bottom */
  span.psw {
    display: block;
    padding-top: 16px;
    text-align: center;
  }
  
  /* Adjust styles for small screens */
  @media screen and (max-width: 768px) {
    .login-container {
      max-width: 90%;
    }
  }
  </style>
  
  <script>
  export default {
    name: 'SigninPage'
  }
  </script>
  