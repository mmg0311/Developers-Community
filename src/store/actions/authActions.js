export const signIn = (credentials) => {
   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
         credentials.email,
         credentials.password
      ).then(() => {
         dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((error) => {
         dispatch({ type: 'LOGIN_ERROR', error });
      })
   }
}

export const signOut = () => {
   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signOut().then(() => {
         dispatch({ type: 'SIGNOUT_SUCCESS' });
      }).catch(() => {
         dispatch({ type: 'SIGNOUT_FAILURE' });
      })
   }
}

export const signUp = (newUser) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();

      firebase.auth().createUserWithEmailAndPassword(
         newUser.email,
         newUser.password
      ).then((res) => {
         // res.user
         // console.log('auth created');
         // console.log(res.user.uid);
         firestore.collection('users').doc(res.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
         })
         // console.log('users collection')
      }).then(() => {
         // console.log('signup success');
         dispatch({ type: 'SIGNUP_SUCCESS' })
      }).catch((error) => {
         // console.log(error);
         dispatch({ type: 'SIGNUP_FAILURE', error })
      })
   }
}