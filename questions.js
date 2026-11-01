export const questions = [
  {
    id: 1,
    category: 'React',
    question: 'Which React Hook is used to manage state in a functional component?',
    options: ['useEffect', 'useState', 'useRoute', 'useStyle'],
    answer: 1,
    explanation: 'useState adds a state variable to a functional component and provides a setter to update it.'
  },
  {
    id: 2,
    category: 'JavaScript',
    question: 'Which keyword declares a block-scoped variable that can be reassigned?',
    options: ['const', 'static', 'let', 'fixed'],
    answer: 2,
    explanation: 'let declares a block-scoped variable that can be reassigned. const is also block-scoped but cannot be reassigned.'
  },
  {
    id: 3,
    category: 'Web',
    question: 'What does CSS primarily control in a web application?',
    options: ['Page styling and layout', 'Database queries', 'Server routing', 'User authentication'],
    answer: 0,
    explanation: 'CSS controls presentation, including colors, spacing, typography, and layout.'
  },
  {
    id: 4,
    category: 'React',
    question: 'Why is the useEffect Hook commonly used?',
    options: ['To create JSX elements only', 'To define CSS classes', 'To replace all props', 'To synchronize with external systems and run side effects'],
    answer: 3,
    explanation: 'useEffect is used for side effects such as timers, subscriptions, and synchronizing with external systems.'
  },
  {
    id: 5,
    category: 'JavaScript',
    question: 'Which array method creates a new array by transforming each item?',
    options: ['forEach()', 'map()', 'find()', 'includes()'],
    answer: 1,
    explanation: 'map() returns a new array containing the result of calling its callback for each element.'
  },
  {
    id: 6,
    category: 'Web',
    question: 'What does HTTP status code 404 normally mean?',
    options: ['Request succeeded', 'Server is restarting', 'Resource not found', 'Access is always granted'],
    answer: 2,
    explanation: 'HTTP 404 indicates that the requested resource could not be found.'
  },
  {
    id: 7,
    category: 'React',
    question: 'What is the purpose of React Router in a single-page application?',
    options: ['Manage navigation between views', 'Compile CSS to HTML', 'Store passwords securely', 'Replace the JavaScript engine'],
    answer: 0,
    explanation: 'React Router maps URL paths to components and enables client-side navigation.'
  },
  {
    id: 8,
    category: 'JavaScript',
    question: 'Which value represents an intentional absence of a value in JavaScript?',
    options: ['true', 'NaN only', '0', 'null'],
    answer: 3,
    explanation: 'null is commonly used to represent an intentional absence of a value.'
  },
  {
    id: 9,
    category: 'Web',
    question: 'Which HTML element is most appropriate for the main heading of a page?',
    options: ['<footer>', '<h1>', '<span>', '<meta>'],
    answer: 1,
    explanation: 'The h1 element represents the highest-level heading for the page content.'
  },
  {
    id: 10,
    category: 'React',
    question: 'In React, what is a prop?',
    options: ['A CSS selector', 'A browser event loop', 'A value passed from a parent component to a child', 'A database table'],
    answer: 2,
    explanation: 'Props are inputs passed to a component, usually from its parent, to configure its output.'
  }
];
