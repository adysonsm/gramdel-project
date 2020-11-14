import firebase from "../firebase";

const db = firebase.ref("/users");

class DataService {
  getAll() {
    return db;
  }

  create(users) {
    return db.push(users);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();