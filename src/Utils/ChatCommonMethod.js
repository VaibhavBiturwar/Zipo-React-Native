import firebase from "firebase";

class Firebase {
  combin_uid;

  constructor() {
    // console.log("called firebase");

    this.init();
    this.observerAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      // console.log("called firebase init");
      firebase.initializeApp({
        apiKey: "AIzaSyBA20r5vTIjBR7XZhLZE0jY-5rbzuP7_4I",
        authDomain: "tawkil-5135e.firebaseapp.com",
        databaseURL: "https://tawkil-5135e-default-rtdb.firebaseio.com",
        projectId: "tawkil-5135e",
        storageBucket: "tawkil-5135e.appspot.com",
        messagingSenderId: "959267701336",
        appId: "1:959267701336:web:8bf1c261eb0afee5ad802d",
        measurementId: "G-9SXGSDD5LE",
      });
    }
    firebase.auth().settings.appVerificationDisabledForTesting = true;
  };

  observerAuth = () => {
    // console.log("called firebase observerAuth");

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = (user) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {}
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    let userID = this.combin_uid;
    return firebase.database().ref("Messages").child(userID);
  }

  parse = (snapshot) => {
    const {
      timestamp: numberStamp,
      text,
      user,
      avatar,
      image,
      location,
    } = snapshot.val();

    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    if (user === "" || user === undefined || !user) {
      let user = {
        avatar: avatar,
      };

      const message = {
        _id,
        timestamp,
        text,
        user,
        image,
        location,
      };
      return message;
    } else {
      const message = {
        _id,
        timestamp,
        text,
        user,
        image,
        location,
      };
      return message;
    }
  };

  on = (callabck) => {
    let userID = this.uid;
    this.ref
      .limitToLast(50)
      .on("child_added", (snapshot) => callabck(this.parse(snapshot)));
  };

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      let userData = JSON.stringify(user);
      let jsonData = JSON.parse(userData);
      let sender_id = user.sender_id.toString();
      let receiver_id = user.receiver_id.toString();

      const message = {
        text,
        user,

        message: text,
        //timestamp: this.timestamp,
        user_image: jsonData.avatar,
        Type: "text",
        sender_id: sender_id,
        receiver_id: receiver_id,
      };
      this.append(message);
    }
  };

  append = (message) => {
    this.ref.push(message);
  };

  off() {
    this.ref.off();
  }
}

Firebase.shared = new Firebase();
export default Firebase;
