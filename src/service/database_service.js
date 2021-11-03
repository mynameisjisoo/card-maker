import firebase from 'firebase';

class DatabaseService {
  writeUserData(userId, name) {
    firebase
      .database()
      .ref('users/' + userId)
      .set({
        username: name
        // email: email,
        // profile_pricture: imageUrl
      });
  }

  //   readUserData() {
  //     const readData = firebase.database().ref('posts/' + postId + '/starCount');
  //     readData.on('value', snapshot => {
  //       const data = snapshot.val();
  //       updateDate(postElement, data);
  //     });
  //   }
}

export default DatabaseService;
