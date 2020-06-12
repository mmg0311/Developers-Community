export const createProject = (project) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firesotre = getFirestore();
      firesotre.collection('projects').add({
         ...project,
         authorFirstName: 'Hello',
         authorLastName: 'World',
         authorId: 121,
         createdAt: new Date()
      }).then(() => {
         dispatch({ type: 'CREATE_PROJECT', project })
      }).catch((error) => {
         console.log(error);
         dispatch({ type: 'CREATE_PROJECT_ERROR', error })
      })
   }
}