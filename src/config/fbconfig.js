import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyAwAIEK3crW_F8zj51LCBd8TzWp7gNSlrg",
   authDomain: "project-store-1517e.firebaseapp.com",
   databaseURL: "https://project-store-1517e.firebaseio.com",
   projectId: "project-store-1517e",
   storageBucket: "project-store-1517e.appspot.com",
   messagingSenderId: "934950350266",
   appId: "1:934950350266:web:87160ef61b3e6233aa8183",
   measurementId: "G-TRQW87Q2XF"
};


firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;