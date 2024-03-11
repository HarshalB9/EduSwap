<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBGuqMSAt0HBxQMx7ou70JmtdQVUiQ-lPc",
    authDomain: "eduswap-e2a03.firebaseapp.com",
    projectId: "eduswap-e2a03",
    storageBucket: "eduswap-e2a03.appspot.com",
    messagingSenderId: "1049115558709",
    appId: "1:1049115558709:web:f5fd6081437dd6c81a427c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>