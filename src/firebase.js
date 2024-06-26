import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk1CdjVDkFdz9lZpQX1MyO9wl5tjhzhHo",
  authDomain: "cloned-you-tube.firebaseapp.com",
  projectId: "cloned-you-tube",
  storageBucket: "cloned-you-tube.appspot.com",
  messagingSenderId: "1043896358557",
  appId: "1:1043896358557:web:4a4ddc9eae7dac6d7ee674"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
