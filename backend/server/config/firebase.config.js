import admin from "firebase-admin";
import { serviceAccountKey } from "./serviceAccountKey.js";

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

export default firebaseApp;
