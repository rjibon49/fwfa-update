import { initializeApp } from "firebase/app";
import firebaseConfig from "./FgitirebaseConfig";


const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;