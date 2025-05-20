
let todos = [
  { title: "Crack the JavaScript Matrix", done: false },
  { title: "Hack the mainframe (legally 😎)", done: false },
  { title: "Build a cyberpunk login system", done: true },
  { title: "Deploy the password vault to the bunker", done: true }
];

let doneTodos = [];
let onGoingTodos = [];

todos.forEach(todo => {
  if (todo.done) {
    doneTodos.push(todo);     
  } else {
    onGoingTodos.push(todo);   
  }
});

console.log("✅ Mission Accomplished (Done Todos):");
doneTodos.forEach(todo => {
  console.log(`=> ${todo.title}`);
});


console.log("\n🚧 Still in the Lab (Ongoing Todos):");
onGoingTodos.forEach(todo => {
  console.log(`=> ${todo.title}`);
});
