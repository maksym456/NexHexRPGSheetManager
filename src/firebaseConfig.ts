import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    appId: import.meta.env.VITE_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

signInAnonymously(auth)
    .then((userCredential) => {
        console.log("signed in anonymously", userCredential.user.uid)
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
    });

export const db = getFirestore(firebaseApp);
console.log(db)