const initState = {
   projects: [
      { id: 1, title: 'Hello World', content: "hey how are you" },
      { id: 2, title: 'Hello World  2', content: "hey how are you 2" }
   ]
}

const projectReducer = (state = initState, action) => {
   switch (action.type) {
      case 'CREATE_PROJECT':
         console.log("created pr0ject");
         console.table(action.project)
   }
   return state
}

export default projectReducer