import { cert, initializeApp, ServiceAccount } from "firebase-admin/app";
import serviceAccount from "./ladi-server-firebase-adminsdk-jsdm4-8b154faac4.json"
import { getDatabase } from "firebase-admin/database"

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
    databaseURL: "https://ladi-server-default-rtdb.firebaseio.com"
});

export const db = getDatabase()