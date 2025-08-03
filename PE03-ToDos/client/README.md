# Input

The application receives input from the user through a text input field. The user types a task description into the input box, and upon clicking the "Add" button, the input is captured and stored in the application's state. Additional user input includes interaction with filter buttons ("All", "Active", "Complete") and task actions such as toggling completion or deleting a todo item.

# Process

The program processes user input using React’s state management with `useState`. When a new task is added, it is assigned a unique index and stored in an array of todos. The app filters the list based on completion status and updates task attributes like completion when toggled. All logic is handled within React functional components using JavaScript.

# Output

The output is a dynamic list of todo items rendered on the screen. The list updates instantly as tasks are added, marked complete, deleted, or filtered, reflecting changes in real time.
