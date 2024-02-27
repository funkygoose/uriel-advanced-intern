import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAieH5xH5TLApazqyOKaMo59seZQiEJioU",
  authDomain: "summarist-app-82ec1.firebaseapp.com",
  projectId: "summarist-app-82ec1",
  storageBucket: "summarist-app-82ec1.appspot.com",
  messagingSenderId: "881753470419",
  appId: "1:881753470419:web:462fe25b851b27d657ab26",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);