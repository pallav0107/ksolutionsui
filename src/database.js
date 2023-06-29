import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PPROJECTID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MESURE,
  };
  
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export async function saveFormData(formData) {
  try {
    const collectionRef = firestore.collection("ksolutions-contact-as");
    const docRef = await collectionRef.add(formData);
    console.log("Data saved successfully! Document ID:", docRef.id);
    return docRef.id; // Return the document ID if needed
  } catch (error) {
    console.error("Error saving data:", error);
    throw error; // Throw the error to be caught by the caller
  }
}