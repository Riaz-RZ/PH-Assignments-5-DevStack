# 🚀 Dev Stack

Dev Stack is a web application that helps developers explore popular technologies and organize their development preferences. Users can view technology information, compare different options, and add their favorite technologies to a personalized stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify (NPM Package)
* JSON  (for technology data)
* Vite (build tool)

## ✨ Features

1. **Explore Technologies**
   Browse different technologies with their names, categories, descriptions, ratings, difficulty levels, and badges.

2. **Build Your Own Stack**
   Add technologies to your personal stack and view the selected technologies in the sidebar.

3. **Manage Selected Technologies**
   Remove individual technologies, remove all selected technologies, and prevent duplicate selections with notification messages.

## 🌐 Live Demo

[Visit Dev Stack](https://ph-devstack.netlify.app/)

---

# 📚 React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX to describe what the user interface should look like.

## 2. What is the difference between props and state?

Props: Read-only data passed down from a parent component to a child component. The receiving child component cannot modify them.
State: Local, mutable data managed internally within a component. Changing state triggers a re-render of the component to update the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook stores and updates changing data inside a React component.
In this project, I used `useState` to store the selected technologies in the user's stack.

const [stack, setStack] = useState<Itechnology[]>([]);


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` handles side effects in React components, such as fetching data. It is needed to load JSON data because data fetching is an asynchronous side effect that should run after the initial render.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update, add, or remove items efficiently without unnecessarily re-rendering the entire list.


## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements depending on a condition.
In this project, I showed an empty message when no technology was selected:

{stack.length === 0 ? (
  <p>Your Stack is Empty.</p>
) : (
  <YourSelectedTechnologies />
)}
   

If the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.
The child can send information back to the parent by calling a function received through props.

