This is a simple To-Do Notes application built using React. The main goal of this project was to learn how state variables (useState) work, 
how props are used to pass data between components, and how Lifting State Up helps in managing state centrally. In this app, the main component 
App holds the state of all notes, while TodoInput allows the user to add a new note, TodoList displays all the notes, and TodoItem represents 
each individual note. Each note is stored as an object with a unique ID and text, so it can be tracked and deleted properly.

One of the important features of this project is that it uses localStorage, which means that even if the user refreshes the page, 
the notes remain saved. Whenever a note is added or deleted, the app updates both the React state and localStorage automatically. 
The delete function works by sending the ID of the note from TodoItem back up to App, which updates the state, and React then re-renders the list.

This project helped me understand how to manage dynamic lists, handle user interactions, and structure a React app in a component-based 
nd maintainable way. It also reinforced the concept that state is the source of truth, while localStorage acts as a persistent backup. 
Overall, it was a practical learning experience in building a small, fully functional React application while practicing key concepts 
like props, state, component hierarchy, and data persistence.
