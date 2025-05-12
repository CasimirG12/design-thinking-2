import type { DocSection } from "../types/models";

export const sections: DocSection[] = [
  {
    id: 1,
    docId: 1,
    writerIds: [1, 2],
    title: "Introduction to React",
    text: `React is a widely used JavaScript library for building user interfaces, particularly for single-page applications where the user experience is dynamic and responsive. Developed by Facebook, React provides a declarative approach to UI development, emphasizing the creation of reusable components. At its core, React is based on the concept of a component-based architecture, where each component encapsulates its own logic, state, and rendering, thus promoting modularity and maintainability in complex applications.

Key Concepts of React

## Components: 
React applications are built using components, which can be functional or class-based. Components are the building blocks of a React application, and they define how the UI should appear based on the state and props. A functional component is typically simpler and focuses on the UI logic, while a class-based component offers more features, including lifecycle methods.\n\r

## JSX: 
React employs JSX (JavaScript XML), a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript files. JSX provides a more readable and maintainable way to define the structure of the UI, and it gets transpiled into JavaScript by tools like Babel. Despite its resemblance to HTML, JSX is ultimately a syntactic sugar that translates into React function calls.\n\r

## State and Props: 
In React, components communicate via two main mechanisms: state and props. The state is used to store data that can change over time, such as user inputs or fetched data. It is mutable and managed internally by the component. In contrast, props are immutable and are passed down to a component from its parent, allowing for data to flow in one direction through the component tree.\n\r

## Virtual DOM: 
React uses a virtual DOM to optimize UI rendering. The virtual DOM is an in-memory representation of the actual DOM elements. When a component's state or props change, React updates the virtual DOM and then compares it with the previous version of the virtual DOM (a process known as "reconciliation"). The differences are then batched and applied to the real DOM, minimizing performance bottlenecks associated with frequent direct manipulations of the DOM.\n

## React Hooks: 
Introduced in React 16.8, hooks are functions that allow developers to use state and other React features in functional components. The most commonly used hooks are useState for managing state, useEffect for side effects (such as data fetching or DOM manipulation), and useContext for consuming context values. Hooks provide a more concise and flexible way to manage component behavior compared to class components.\n

## Lifecycle Methods: 
Class components in React come with lifecycle methods that allow developers to hook into different phases of a component's lifecycle, such as mounting, updating, and unmounting. These methods include componentDidMount, shouldComponentUpdate, and componentWillUnmount. However, with the introduction of hooks, functional components can now replicate lifecycle behaviors through hooks like useEffect, providing a more declarative way to manage side effects.\n

## React Router: 
React Router is a library used for managing navigation in single-page applications. It enables the creation of declarative routing by allowing developers to define routes within the app and map them to specific components. With React Router, developers can create dynamic, client-side routing without the need for page reloads, ensuring a smoother user experience.

## Context API: 
The Context API is a feature of React that allows for the sharing of global data across components without having to pass props manually at every level. It is particularly useful for state management in larger applications, where managing props and state across deep component trees can become cumbersome.

## Redux (Optional State Management Library): 
For complex applications where the state management becomes difficult, Redux is a popular state management library often used with React. It allows for the centralized management of the application's state, enabling components to access and update state in a predictable manner. Redux follows a unidirectional data flow, which ensures consistency and simplifies debugging.

## Conclusion
React has become an integral part of modern web development due to its flexibility, performance optimizations, and ease of use. By embracing component-based architecture, developers can build scalable, maintainable, and efficient UIs that can be easily updated in response to changes in data. React’s combination of declarative syntax, virtual DOM, and the introduction of hooks has led to a significant shift in how UIs are developed, promoting cleaner code and better separation of concerns. With its extensive ecosystem, including libraries like React Router and Redux, React provides developers with all the tools necessary to create rich, interactive web applications.
`,
    dateCreated: "2025-05-04",
    lastEdited: "2025-05-10",
    edit: false,
  },
  {
    id: 2,
    docId: 1,
    writerIds: [2],
    title: "React State Management",
    text: `State management is a crucial part of React applications. As applications grow in complexity, managing state across multiple components can become challenging. React provides several built-in solutions and also supports third-party libraries to handle state more effectively.

## useState Hook:
The useState hook allows developers to add local state to functional components. It returns a stateful value and a function to update it. This hook is commonly used for managing form inputs, toggles, and other UI-related data.

## useReducer Hook:
useReducer is an alternative to useState and is more suitable for complex state logic. It’s particularly useful when state depends on previous values or when multiple values must be updated in response to a single action. It works similarly to reducers in Redux.

## Lifting State Up:
Sometimes, state needs to be shared between components. The recommended approach is to lift the state up to their closest common ancestor, passing it down through props. This ensures a single source of truth and avoids duplication.

## State Management Libraries:
When state sharing becomes too complex, libraries like Redux, Zustand, or Recoil can help. Redux provides a centralized store for state with strict rules on how data can be updated. Zustand offers a simpler API and less boilerplate, while Recoil enables state management with an atom-based model integrated with React’s concurrent mode.`,
    dateCreated: "2025-05-06",
    lastEdited: "2025-05-10",
    edit: false,
  },
  {
    id: 3,
    docId: 1,
    writerIds: [1],
    title: "Advanced React Patterns",
    text: `Advanced React patterns can improve scalability and maintainability by encouraging code reuse and clearer separation of concerns.

## Compound Components:
Compound components let you create a parent component that handles logic and passes data to subcomponents implicitly. This pattern is often used in UI libraries for building controlled and uncontrolled form elements.

## Render Props:
Render props refer to a technique for sharing code between React components using a function prop whose value is a function. This allows greater flexibility in how child components are rendered.

## Higher-Order Components (HOCs):
An HOC is a function that takes a component and returns a new component. They are used to abstract shared logic and inject additional functionality such as authentication, logging, or data fetching.

## Custom Hooks:
Custom hooks allow you to extract and reuse stateful logic in a functional way. Instead of duplicating logic across multiple components, custom hooks encapsulate the behavior and can be imported wherever needed.

These patterns help organize code in large React apps and encourage the use of reusable, testable components.`,
    dateCreated: "2025-05-07",
    lastEdited: "2025-05-10",
    edit: false,
  },
];

export const documentations = [
  {
    id: 1,
    creatorId: 1,
    contributerIds: [1, 2],
    dateCreated: "2025-05-04",
    lastEdited: "2025-05-10",
  },
];
