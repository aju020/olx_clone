import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyCbSWIVO0nyvrjElCW5tUVgTg9_bShG2yQ",
        authDomain: "fir-f6168.firebaseapp.com",
        projectId: "fir-f6168",
        storageBucket: "fir-f6168.appspot.com",
        messagingSenderId: "772963639243",
        appId: "1:772963639243:web:43d756d03dd546c45b204e",
        measurementId: "G-0JMX7Y1R8P"
      };
export default firebase.initializeApp(firebaseConfig);