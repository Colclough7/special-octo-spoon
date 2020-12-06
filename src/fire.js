import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyB65uMD6hjlXe7sETne85YPeLdYMlBVgVo",
    authDomain: "inventory-app-adf68.firebaseapp.com",
    projectId: "inventory-app-adf68",
    storageBucket: "inventory-app-adf68.appspot.com",
    messagingSenderId: "166125675113",
    appId: "1:166125675113:web:4415c05fe545a3d416f8f8"
  };

 
  
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire
