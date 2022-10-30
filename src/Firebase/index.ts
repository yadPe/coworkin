import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore, collection, CollectionReference, getDoc, DocumentData, query, getDocs, where, doc } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

class Firebase {
  private readonly app: FirebaseApp;
  private readonly db: Firestore;
  private readonly auth: Auth;
  private readonly config = {
    apiKey: "AIzaSyB4LYUsqtGVzzu8GGFTBq66C6-y7G_nvLI",
    authDomain: "coworkin-fr.firebaseapp.com",
    projectId: "coworkin-fr",
    storageBucket: "coworkin-fr.appspot.com",
    messagingSenderId: "630427192487",
    appId: "1:630427192487:web:1a57cca530d4e5a9e81f82"
  }
  collections: Record<"listings", CollectionReference<DocumentData>>;
  // converters: { listings: (snapshot: { data: (arg0: any) => any; }, options: any) => any; };
  constructor() {
    this.app = initializeApp(this.config);
    this.db = getFirestore(this.app);
    this.auth = getAuth(this.app);
    this.collections = {
      listings: collection(this.db, "listings")
    }
    // this.converters = {
    //   listings: (snapshot: { data: (arg0: any) => any; }, options: any) => {
    //     const data = snapshot.data(options);
    //     return data;
    //   }
    // }
  }

  async getListingById(id: string) {
    const docRef = doc(this.db, "Listings", id);
    const docSnap = await getDoc(docRef);


    return docSnap.data();
  }
}

export default Firebase;