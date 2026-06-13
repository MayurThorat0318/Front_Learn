import React, { useState, useMemo } from 'react';
import Button from '../components/common/Button';
import './InterviewPrep.css';

export default function InterviewPrep() {
  // Mock interview questions database
  const questionsData = [
    {
      id: 1,
      category: 'HTML',
      question: 'What is Semantic HTML and why is it important?',
      answer: 'Semantic HTML refers to using tags that clearly define their content meaning (like <article>, <header>, <nav>) rather than generic structural containers (like <div>, <span>). It is crucial because it improves web Accessibility (helping screen readers read content hierarchically), boosts SEO (helping search engine bots index pages), and increases code readability.'
    },
    {
      id: 2,
      category: 'CSS',
      question: 'What is the CSS Box Model, and how does box-sizing: border-box affect it?',
      answer: 'The CSS Box Model is the layout structure of elements, consisting of Margins, Borders, Padding, and the central Content box. By default, adding paddings or borders expands the layout size of elements beyond their set width. Declaring "box-sizing: border-box" locks the elements dimensions: paddings and borders are absorbed inside the width parameter.'
    },
    {
      id: 3,
      category: 'CSS',
      question: 'What is the main difference between Flexbox and Grid?',
      answer: 'Flexbox is a 1-dimensional layout system, useful for arranging items in a single column OR a single row. Grid is a 2-dimensional layout system, capable of organizing elements inside complex grids of both rows AND columns simultaneously. Use Flexbox for small components (like navbars); use Grid for full-page structures.'
    },
    {
      id: 4,
      category: 'JavaScript',
      question: 'What is Event Delegation in JavaScript and why use it?',
      answer: 'Event Delegation is an optimization pattern where a single event listener is attached to a parent element rather than attaching separate listeners to every child item. It works because of Event Bubbling (clicks climb the DOM tree). This saves memory usage and ensures that new elements dynamically added to the list automatically inherit the listener.'
    },
    {
      id: 5,
      category: 'JavaScript',
      question: 'Explain the difference between double equals (==) and triple equals (===).',
      answer: 'Double equals (==) compares values after performing Type Coercion (converting variables to equivalent types). For example, 5 == "5" evaluates to true. Triple equals (===) compares both values AND data types strictly without conversion (5 === "5" returns false because number is not equal to string).'
    },
    {
      id: 6,
      category: 'JavaScript',
      question: 'What is a Closure in JavaScript?',
      answer: 'A closure is formed when a function references variables located inside its outer lexical scope. The function retains access to those scope variables even after the outer function has completed execution and returned, allowing data encapsulation (private variables).'
    },
    {
      id: 7,
      category: 'React',
      question: 'Why should you never modify state directly in React?',
      answer: 'Modifying state variables directly (e.g. state.value = "new") does not inform React of changes. React relies on state setter functions (like setState) to identify references differences. Calling the setter schedules page render updates; mutating values directly bypasses rendering updates, causing freeze issues.'
    },
    {
      id: 8,
      category: 'React',
      question: 'What is the purpose of the "key" prop in React lists?',
      answer: 'The key prop helps React identify which list elements have changed, been added, or been deleted during dynamic renders. It acts as an identifier during DOM reconciliation. Keys should be unique and stable strings (avoid using array indices, which scramble rendering when items are reordered).'
    },
    {
      id: 9,
      category: 'HTML',
      question: 'What is the difference between block-level and inline elements?',
      answer: 'Block-level elements (e.g., <div>, <p>, <h1>) start on a new line and stretch to fill the full width of their parent container. Inline elements (e.g., <span>, <a>, <strong>) do not start on a new line and only occupy the width of their content.'
    },
    {
      id: 10,
      category: 'HTML',
      question: 'What are HTML5 semantic tags and can you name some?',
      answer: 'Semantic tags clearly describe their meaning to both the browser and the developer (e.g., <header>, <footer>, <article>, <section>, <nav>, <main>, <aside>). They improve accessibility, search engine indexing (SEO), and code maintainability.'
    },
    {
      id: 11,
      category: 'HTML',
      question: 'What is the purpose of the alt attribute on <img> tags?',
      answer: 'The alt (alternate text) attribute provides a text description of an image. It is critical for accessibility (read aloud by screen readers for visually impaired users) and serves as a fallback description if the image file fails to load.'
    },
    {
      id: 12,
      category: 'HTML',
      question: 'What is the difference between the src and href attributes?',
      answer: 'src (source) is used to embed/load a resource into the document (like <script src="..."> or <img src="...">), which blocks rendering until retrieved. href (hypertext reference) specifies a link/relationship to an external resource (like <a href="..."> or <link href="...">).'
    },
    {
      id: 13,
      category: 'HTML',
      question: 'What is the difference between Cookies, LocalStorage, and SessionStorage?',
      answer: 'Cookies store tiny data (4KB) and are automatically sent to the server with every HTTP request. LocalStorage stores larger data (5-10MB) in the client browser with no expiration. SessionStorage works like LocalStorage but is cleared immediately when the browser tab is closed.'
    },
    {
      id: 14,
      category: 'HTML',
      question: 'What is the purpose of the <!DOCTYPE html> declaration?',
      answer: 'It is a directive that tells the web browser which version of HTML the page is written in (HTML5 in modern web pages). It ensures the browser renders the page in standard compliance mode instead of quirks rendering mode.'
    },
    {
      id: 15,
      category: 'HTML',
      question: 'How do script, script async, and script defer attributes differ in HTML parsing?',
      answer: 'Standard <script> blocks HTML parsing while downloading and executing. <script async> downloads in parallel and executes immediately upon completion, interrupting parsing. <script defer> downloads in parallel and executes only after HTML parsing is fully complete, preserving execution order.'
    },
    {
      id: 16,
      category: 'HTML',
      question: 'What is the purpose of meta tags in HTML?',
      answer: 'Meta tags inside the <head> define page metadata not visible to users, such as character set (charset), viewport controls for mobile responsiveness, page descriptions/keywords for search engine indexing (SEO), and author info.'
    },
    {
      id: 17,
      category: 'HTML',
      question: 'What is the security risk of using target="_blank" and how is it fixed?',
      answer: 'Using target="_blank" allows the opened page to access the original page via window.opener, introducing phishing risks. It is fixed by adding the rel="noopener noreferrer" attribute to the anchor element, isolating the new tab.'
    },
    {
      id: 18,
      category: 'HTML',
      question: 'What is the difference between <b>/<i> and <strong>/<em> tags?',
      answer: '<b> (bold) and <i> (italic) tags are presentational, changing only visual weight. <strong> and <em> tags are semantic, marking text with strong importance or emphasis, which screen readers announce to visually impaired users.'
    },
    {
      id: 19,
      category: 'HTML',
      question: 'What are HTML data attributes (data-*) used for?',
      answer: 'Data attributes let developers store custom data directly on HTML elements without abusing standard attributes. They can be accessed in JavaScript via element.dataset or targeted in CSS stylesheets using attribute selectors.'
    },
    {
      id: 20,
      category: 'HTML',
      question: 'How do you optimize HTML markup structure for SEO?',
      answer: 'By using proper semantic layout elements (<main>, <article>, <header>), establishing a clean header nesting hierarchy (single <h1> per page down to <h6>), adding alt tags on all images, and utilizing descriptive anchor text links.'
    },
    {
      id: 21,
      category: 'HTML',
      question: 'What is the purpose of the <picture> tag in HTML5?',
      answer: 'The <picture> element wraps multiple <source> tags and one <img> fallback to supply responsive image assets. It serves different image files depending on viewport widths or file format compatibility (e.g. loading modern WebP/AVIF images first).'
    },
    {
      id: 22,
      category: 'HTML',
      question: 'What are Web Workers and how do they relate to the page UI thread?',
      answer: 'Web Workers allow running complex scripts in background threads separate from the main browser UI execution thread. This prevents long-running JavaScript execution from freezing or lagging user scroll/interaction events on the main page.'
    },
    {
      id: 23,
      category: 'HTML',
      question: 'What is the role of the <noscript> tag?',
      answer: 'The <noscript> tag defines alternative block content to render for users who have disabled JavaScript execution in their browser preferences or whose browsers do not support scripting.'
    },
    {
      id: 24,
      category: 'HTML',
      question: 'What is SVG and why is it preferred over raster images in web UI design?',
      answer: 'SVG (Scalable Vector Graphics) is an XML-based vector format. Unlike raster formats (PNG, JPEG), SVGs scale infinitely without pixelating, have tiny file sizes for icons/shapes, and their inner paths can be styled or animated using CSS/JS.'
    },
    {
      id: 25,
      category: 'HTML',
      question: 'What is the iframe tag and what are its drawbacks?',
      answer: 'An inline frame used to embed an external HTML document inside the current page. Key drawbacks include security concerns (vulnerabilities like clickjacking), slower page loads, SEO rendering gaps, and accessibility navigation challenges.'
    },
    {
      id: 26,
      category: 'HTML',
      question: 'What is the native <dialog> element and how do you use it?',
      answer: 'The <dialog> element is a native HTML container for modal dialog popups or overlays. It supports standard popup focus traps, backdrops styling via the ::backdrop pseudo-element, and simple javascript open toggles like dialog.showModal() or dialog.close().'
    },
    {
      id: 27,
      category: 'HTML',
      question: 'When should you use a <button> vs an <a> (anchor) tag?',
      answer: 'Use anchor tags (<a>) exclusively for navigation that alters the URL address bar or jumps to document section IDs. Use buttons (<button>) to trigger functional javascript actions (modal toggles, form submissions, carousel navigation).'
    },
    {
      id: 28,
      category: 'HTML',
      question: 'How do you group related option elements inside a dropdown menu?',
      answer: 'By nesting related <option> elements inside an <optgroup> element, providing a non-selectable bold label header via the label attribute (e.g., <optgroup label="Fruits">).'
    },
    {
      id: 29,
      category: 'CSS',
      question: 'What is specificity in CSS and how is it calculated?',
      answer: 'CSS specificity determines which rules are applied when multiple selectors match the same node. It is calculated in blocks: Inline styles (1000) > ID selectors (100) > Classes, attribute selectors, and pseudo-classes (10) > Elements and pseudo-elements (1).'
    },
    {
      id: 30,
      category: 'CSS',
      question: 'What is the difference between display: none and visibility: hidden?',
      answer: 'display: none removes the element from the document layout flow entirely, taking up zero dimensions. visibility: hidden hides the element visually, but it remains in the flow layout and still occupies its original layout width/height.'
    },
    {
      id: 31,
      category: 'CSS',
      question: 'What are CSS Custom Properties (Variables) and how are they used?',
      answer: 'CSS variables allow declaring values globally or locally inside selectors (e.g., --main-color: #333;) and reusing them using the var() syntax (e.g., color: var(--main-color);). They cascade, support inheritances, and can be changed in JS.'
    },
    {
      id: 32,
      category: 'CSS',
      question: 'What is a CSS Preprocessor (like Sass) and what does it bring?',
      answer: 'A preprocessor compiles specialized nested syntax styles into standard CSS. It introduces programming concepts to style systems, including nested styles rules, reusable mixins, variables sheets, and split file imports.'
    },
    {
      id: 33,
      category: 'CSS',
      question: 'What is the difference between absolute, relative, fixed, and sticky positioning?',
      answer: 'relative positions elements offset from normal flow. absolute positions relative to the nearest positioned ancestor (non-static). fixed positions relative to the screen viewport. sticky toggles relative-to-fixed positioning on scroll.'
    },
    {
      id: 34,
      category: 'CSS',
      question: 'What is the difference between em, rem, px, and % units?',
      answer: 'px is an absolute unit of screen pixels. % is relative to parent elements dimensions. em is relative to the font-size of the current or parent element. rem is relative to the root <html> font-size (typically 16px by default).'
    },
    {
      id: 35,
      category: 'CSS',
      question: 'What makes opacity: 0 elements different from hidden/none displays?',
      answer: 'opacity: 0 elements are fully transparent but remain present in the DOM flow. They continue to occupy layout spaces and can still receive hover events, mouse clicks, and keyboard focus actions unless pointer-events: none is applied.'
    },
    {
      id: 36,
      category: 'CSS',
      question: 'Explain the z-index property and what triggers a Stacking Context.',
      answer: 'z-index sets paint ordering along the 3D depth axis for positioned nodes (non-static). A Stacking Context is formed by properties like position: fixed, opacity values below 1, css transforms, and z-index values on positioned items.'
    },
    {
      id: 37,
      category: 'CSS',
      question: 'What are CSS sprites and what are their benefits?',
      answer: 'Combining multiple small images/icons into one single image asset sheet, rendering them using background-image and adjusting background-position offsets. It reduces server overhead by requiring only one image file download.'
    },
    {
      id: 38,
      category: 'CSS',
      question: 'How does naming grid zones simplify templates with grid-template-areas?',
      answer: 'grid-template-areas maps grid slots as visual names (e.g. "head head" "side main"). Grid child nodes specify grid-area: head, positioning themselves directly without configuring numeric grid columns or grid rows spans.'
    },
    {
      id: 39,
      category: 'CSS',
      question: 'Explain the grow, shrink, and basis parameters in the flex shorthand.',
      answer: 'The flex property shorthand combines: flex-grow (relative growth factor if space remains), flex-shrink (shrinkage factor if space overflow occurs), and flex-basis (the initial starting size before distributing page spaces).'
    },
    {
      id: 40,
      category: 'CSS',
      question: 'What is the difference between a pseudo-class and a pseudo-element?',
      answer: 'A pseudo-class (e.g., :hover, :focus, :nth-child) defines special element interaction states. A pseudo-element (e.g., ::before, ::after, ::placeholder) represents virtual nodes used to style specific document parts.'
    },
    {
      id: 41,
      category: 'CSS',
      question: 'What are the most common methods to center a block element?',
      answer: 'Modern flexbox (display: flex; justify-content: center; align-items: center; on parent) or CSS grid (display: grid; place-items: center; on parent). Block margin layout (margin: 0 auto; for horizontal alignment) can also be used.'
    },
    {
      id: 42,
      category: 'CSS',
      question: 'How do media queries work for responsive designs?',
      answer: 'Media queries execute dynamic styling overrides depending on viewport size or device capability parameters (e.g., @media (max-width: 768px) { ... }). This scales page layout elements smoothly between mobile, tablet, and desktop.'
    },
    {
      id: 43,
      category: 'CSS',
      question: 'What is the Block-Element-Modifier (BEM) naming convention?',
      answer: 'BEM is an architectural style naming methodology: block components (.menu), component inner elements (.menu__item), and modifier options (.menu__item--active). It prevents selector collisions and makes CSS files easier to read.'
    },
    {
      id: 44,
      category: 'CSS',
      question: 'What is the difference between browser resets and normalize.css?',
      answer: 'Browser resets erase all browser margins, paddings, and font sizes to a clean zero canvas. Normalize.css retains default browser styling traits but fixes inconsistencies, margins, and bugs across browsers to establish uniform styling.'
    },
    {
      id: 45,
      category: 'CSS',
      question: 'What are the trade-offs between inline, internal, and external styles?',
      answer: 'inline style (style="...") overrides other rules but pollutes tags. internal (<style>) scope is current file only. external CSS (linked .css file) is standard practice as it separates style from logic and supports browser caching.'
    },
    {
      id: 46,
      category: 'CSS',
      question: 'How do content-visibility properties boost page render speeds?',
      answer: 'content-visibility: auto tells browsers to skip rendering off-screen element layouts until user scrolls near them. Combined with contain-intrinsic-size placeholders, it speeds up first-contentful-paint rendering times.'
    },
    {
      id: 47,
      category: 'CSS',
      question: 'How do you supply fallback values in variable lookups?',
      answer: 'By providing a comma-separated fallback parameter inside the var() declaration: var(--primary-color, #ff0000). If --primary-color is undefined, the stylesheet reverts to rendering the #ff0000 fallback color.'
    },
    {
      id: 48,
      category: 'CSS',
      question: 'What is the difference between the :nth-child and :nth-of-type selectors?',
      answer: ':nth-child(n) matches the n-th sibling child regardless of its element tag name. :nth-of-type(n) targets the n-th child specifically within siblings of the exact same element tag name (e.g., only paragraphs).'
    },

    // ─── JavaScript ───────────────────────────────────────────────────────────
    {
      id: 49,
      category: 'JavaScript',
      question: 'Explain the JavaScript Event Loop and how asynchronous code executes.',
      answer: 'JavaScript is single-threaded. The Event Loop monitors the Call Stack and the Callback Queue. Synchronous code runs on the stack. When async operations (setTimeout, fetch) complete, their callbacks are pushed to the Callback Queue. The Event Loop moves them to the stack only when the stack is empty. Microtasks (Promises) take priority over macrotasks (setTimeout).'
    },
    {
      id: 50,
      category: 'JavaScript',
      question: 'What are the differences between var, let, and const?',
      answer: 'var is function-scoped and hoisted with undefined. let and const are block-scoped and not accessible before declaration (Temporal Dead Zone). var allows re-declaration; let allows reassignment but not re-declaration; const allows neither reassignment nor re-declaration (though object properties can still be mutated).'
    },
    {
      id: 51,
      category: 'JavaScript',
      question: 'What is Hoisting in JavaScript?',
      answer: 'Hoisting is JavaScript\'s mechanism of moving declarations to the top of their scope before execution. Function declarations are fully hoisted (body included). var variables are hoisted and initialized as undefined. let/const declarations are hoisted but not initialized, causing a ReferenceError if accessed before their line (Temporal Dead Zone).'
    },
    {
      id: 52,
      category: 'JavaScript',
      question: 'Explain prototype chains and prototypal inheritance in JavaScript.',
      answer: 'Every JavaScript object has an internal [[Prototype]] link pointing to another object. When a property is not found on an object, the engine walks up the prototype chain until it finds it or reaches null. Prototypal inheritance lets objects share behavior without classes — constructor functions and Object.create() both leverage this chain.'
    },
    {
      id: 53,
      category: 'JavaScript',
      question: 'What are the differences between map(), forEach(), and filter()?',
      answer: 'forEach() iterates over an array and executes a callback for each item, returning undefined. map() transforms each item using a callback and returns a new array of equal length. filter() tests each item with a callback and returns a new array containing only items where the test returned true.'
    },
    {
      id: 54,
      category: 'JavaScript',
      question: 'What is a Promise and what are its three states?',
      answer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: Pending (initial state, neither fulfilled nor rejected), Fulfilled (operation completed successfully, .then() runs), and Rejected (operation failed, .catch() runs). Once settled, a Promise is immutable.'
    },
    {
      id: 55,
      category: 'JavaScript',
      question: 'What is the difference between call(), apply(), and bind()?',
      answer: 'All three set the "this" context of a function. call() invokes the function immediately with arguments passed individually. apply() invokes immediately with arguments as an array. bind() does NOT invoke immediately — it returns a new function with "this" permanently bound, which can be called later.'
    },
    {
      id: 56,
      category: 'JavaScript',
      question: 'What is destructuring in JavaScript and how is it used?',
      answer: 'Destructuring is a syntax for unpacking values from arrays or properties from objects into distinct variables. Array destructuring uses position order: const [a, b] = [1, 2]. Object destructuring uses key names: const { name, age } = person. It also supports default values and renaming.'
    },
    {
      id: 57,
      category: 'JavaScript',
      question: 'What is the difference between null and undefined?',
      answer: 'undefined means a variable has been declared but not yet assigned a value — it is the default value for uninitialized variables and missing function arguments. null is an intentional assignment representing "no value" or "empty." typeof undefined is "undefined" whereas typeof null is "object" (a historical bug in JavaScript).'
    },
    {
      id: 58,
      category: 'JavaScript',
      question: 'How do arrow functions differ from regular function declarations?',
      answer: 'Arrow functions do not have their own "this" — they inherit it lexically from the enclosing scope. They cannot be used as constructors (no "new"), have no "arguments" object, and cannot be used as generators. Regular functions get "this" bound dynamically based on how they are called.'
    },
    {
      id: 59,
      category: 'JavaScript',
      question: 'What does "use strict" do in JavaScript?',
      answer: '"use strict" enables Strict Mode, which opts into a restricted variant of JavaScript. It prevents silent errors (e.g., assigning to undeclared variables throws a ReferenceError), disables misleading features like with statements, prevents duplicate parameter names, and makes "this" undefined in plain function calls instead of defaulting to globalThis.'
    },
    {
      id: 60,
      category: 'JavaScript',
      question: 'What is Currying in JavaScript?',
      answer: 'Currying transforms a function that takes multiple arguments into a sequence of functions each taking one argument. For example, add(2)(3) instead of add(2, 3). It enables partial application — fixing some arguments ahead of time to create specialized reusable functions.'
    },
    {
      id: 61,
      category: 'JavaScript',
      question: 'What is the difference between synchronous and asynchronous JavaScript execution?',
      answer: 'Synchronous code executes line by line on the single main thread — each operation blocks the next until it completes. Asynchronous code (Promises, async/await, callbacks) offloads operations to the browser Web APIs (timers, fetch), freeing the main thread to continue, with results handled later via the Event Loop.'
    },
    {
      id: 62,
      category: 'JavaScript',
      question: 'What is the difference between debouncing and throttling?',
      answer: 'Both are rate-limiting techniques. Debouncing delays executing a function until a specified time has passed since the last invocation — ideal for search input (only fire after typing stops). Throttling ensures a function executes at most once per time interval regardless of how many times it is called — ideal for scroll or resize events.'
    },
    {
      id: 63,
      category: 'JavaScript',
      question: 'What is the difference between the spread (...) and rest (...) operators?',
      answer: 'Both use the same ... syntax but serve opposite roles. Spread expands an iterable (array, object) into individual elements: Math.max(...arr). Rest collects multiple function arguments into a single array: function sum(...nums). In destructuring, rest collects the remaining items.'
    },
    {
      id: 64,
      category: 'JavaScript',
      question: 'How does JavaScript garbage collection work?',
      answer: 'JavaScript uses a mark-and-sweep algorithm. The garbage collector periodically starts from "roots" (global variables, call stack), marks all reachable objects, then sweeps and frees memory for unmarked (unreachable) objects. Circular references that are no longer reachable from roots are also collected.'
    },
    {
      id: 65,
      category: 'JavaScript',
      question: 'What is a pure function in JavaScript?',
      answer: 'A pure function always returns the same output for the same input (deterministic) and has no side effects — it does not modify external variables, DOM, databases, or perform network calls. Pure functions make code predictable, testable, and safe to memoize.'
    },
    {
      id: 66,
      category: 'JavaScript',
      question: 'What is the difference between a deep copy and a shallow copy?',
      answer: 'A shallow copy duplicates the top-level object but nested objects still share the same references (e.g., Object.assign, spread). A deep copy recursively clones all nested values into independent memory (e.g., structuredClone(), JSON.parse(JSON.stringify(obj))). Modifying nested data in a shallow copy affects the original.'
    },
    {
      id: 67,
      category: 'JavaScript',
      question: 'What is the Temporal Dead Zone (TDZ) in JavaScript?',
      answer: 'The TDZ is the period between entering a block scope and the point where a let or const variable is declared. Accessing the variable during this window throws a ReferenceError, even though the declaration was hoisted. It enforces declaring variables before using them.'
    },
    {
      id: 68,
      category: 'JavaScript',
      question: 'What are JavaScript Generators and how do they work?',
      answer: 'Generators are functions declared with function* that can pause and resume execution. Each call to next() runs until it hits a yield statement, returning an object { value, done }. They are useful for lazy evaluation, implementing iterators, and handling async flows with libraries like Redux-Saga.'
    },

    // ─── React ────────────────────────────────────────────────────────────────
    {
      id: 69,
      category: 'React',
      question: 'How does React use the Virtual DOM to update the real DOM?',
      answer: 'React maintains a lightweight in-memory copy of the real DOM called the Virtual DOM. When state or props change, React re-renders the component tree into a new Virtual DOM snapshot. It then diffs the old and new snapshots (reconciliation), calculates the minimal set of changes, and applies only those changes to the real DOM — avoiding expensive full-page repaints.'
    },
    {
      id: 70,
      category: 'React',
      question: 'What are the key differences between Class and Functional components?',
      answer: 'Class components extend React.Component, use lifecycle methods (componentDidMount, etc.), and store state via this.state. Functional components are plain JavaScript functions that use Hooks (useState, useEffect) to achieve the same capabilities. Functional components are simpler, easier to test, and the modern React standard since Hooks were introduced.'
    },
    {
      id: 71,
      category: 'React',
      question: 'What are the Rules of Hooks in React?',
      answer: 'React enforces two rules for Hooks: 1) Only call Hooks at the top level — never inside loops, conditions, or nested functions — so React can preserve the order of Hook calls between renders. 2) Only call Hooks from React functional components or custom Hooks, not from regular JavaScript functions.'
    },
    {
      id: 72,
      category: 'React',
      question: 'Explain the useEffect lifecycle: mount, update, and cleanup.',
      answer: 'useEffect runs after every render by default. The dependency array controls when it re-runs: [] runs once on mount only; [dep] runs on mount and whenever dep changes. The optional cleanup function returned inside useEffect runs before the next effect fires and on unmount — used to cancel subscriptions, timers, or event listeners.'
    },
    {
      id: 73,
      category: 'React',
      question: 'What is the difference between useMemo and useCallback?',
      answer: 'useMemo memoizes the result of a computation — it recalculates only when its dependency array changes, preventing expensive recalculations on every render. useCallback memoizes a function instance — it returns the same function reference between renders, preventing unnecessary re-renders of child components that receive the function as a prop.'
    },
    {
      id: 74,
      category: 'React',
      question: 'How does the React Context API solve global state sharing?',
      answer: 'Context API allows creating a shared data store accessible to any component in the tree without manually passing props at every level. A Provider component wraps the tree and supplies a value. Any descendant can consume that value with useContext(). It is ideal for themes, authentication state, and language settings.'
    },
    {
      id: 75,
      category: 'React',
      question: 'What is prop drilling and how do you prevent it?',
      answer: 'Prop drilling occurs when a prop must be passed through multiple intermediate components that do not need it, just to reach a deeply nested child. It can be prevented by using the Context API for global state, a state management library (Zustand, Redux), or component composition to restructure the tree and reduce depth.'
    },
    {
      id: 76,
      category: 'React',
      question: 'What is the difference between controlled and uncontrolled inputs?',
      answer: 'A controlled input has its value driven by React state — every keystroke updates state via an onChange handler, and the state value is passed back as the value prop. An uncontrolled input stores its value internally in the DOM, accessed via a useRef. Controlled inputs are predictable and easier to validate.'
    },
    {
      id: 77,
      category: 'React',
      question: 'What is the useRef hook and when should you use it?',
      answer: 'useRef returns a mutable ref object whose .current property persists across renders without triggering re-renders when changed. It is used to access DOM nodes directly (e.g., focusing an input), store mutable values that should not cause re-renders (e.g., timers, previous state), and hold stable references across renders.'
    },
    {
      id: 78,
      category: 'React',
      question: 'What is React Reconciliation and how does the diffing algorithm work?',
      answer: 'Reconciliation is the process React uses to determine what has changed and needs to be updated in the real DOM. React\'s diffing algorithm compares Virtual DOM trees level by level. It assumes elements of different types produce different trees, and uses the key prop on lists to identify which items have moved, been added, or removed.'
    },
    {
      id: 79,
      category: 'React',
      question: 'What is the difference between rendering and mounting in React?',
      answer: 'Mounting occurs once when a component is inserted into the DOM for the first time. Rendering happens every time React calls the component function to compute its output — which can occur many times (on every state or props change). Mounting triggers useEffect with [], while every render can trigger effects based on their dependencies.'
    },
    {
      id: 80,
      category: 'React',
      question: 'What is a Higher-Order Component (HOC) in React?',
      answer: 'A Higher-Order Component is a function that takes a component as input and returns a new enhanced component. It is used to share logic across components (e.g., authentication checks, data fetching, logging) without modifying the original component. HOCs follow the principle of composition over inheritance.'
    },
    {
      id: 81,
      category: 'React',
      question: 'What are Error Boundaries in React?',
      answer: 'Error Boundaries are class components that implement componentDidCatch and getDerivedStateFromError lifecycle methods. They catch JavaScript errors anywhere in the component tree during rendering, log them, and display a fallback UI instead of crashing the whole application. Functional component error boundaries are not natively supported without libraries.'
    },
    {
      id: 82,
      category: 'React',
      question: 'How do React.lazy and Suspense enable code splitting?',
      answer: 'React.lazy() lets you dynamically import a component only when it is first rendered, splitting it into a separate JS chunk. Suspense wraps lazy-loaded components and renders a fallback (e.g., a spinner) while the chunk is being fetched. This reduces the initial bundle size and speeds up page load time.'
    },
    {
      id: 83,
      category: 'React',
      question: 'What is the difference between a React Element and a React Component?',
      answer: 'A React Element is a plain JavaScript object describing what to render — the output of JSX expressions like <div>. A React Component is a function or class that accepts props and returns React Elements. Components are reusable blueprints; Elements are the lightweight descriptions of a specific instance of what should appear on screen.'
    },
    {
      id: 84,
      category: 'React',
      question: 'What are Custom Hooks and when should you create one?',
      answer: 'A Custom Hook is a JavaScript function whose name starts with "use" and that calls other Hooks inside it. You create one to extract and reuse stateful logic across multiple components — such as useFetch for data loading, useLocalStorage for persistence, or useDebounce for input rate-limiting — without duplicating code.'
    },
    {
      id: 85,
      category: 'React',
      question: 'What does React StrictMode do?',
      answer: 'React.StrictMode is a developer-only wrapper that intentionally double-invokes functions (render, state initializers, useEffect setup/cleanup) to help detect side effects, deprecated API usages, and unexpected behaviors. It has no effect in the production build. It helps you write resilient, future-proof React code.'
    },
    {
      id: 86,
      category: 'React',
      question: 'What are CSS Modules and how do they compare to styled-components?',
      answer: 'CSS Modules scope CSS class names locally by auto-generating unique class names at build time, preventing global collisions while using plain CSS. styled-components is a CSS-in-JS library that generates scoped styles using tagged template literals in JavaScript, enabling dynamic styles based on props. Modules keep CSS separate; styled-components co-locate styles with logic.'
    },
    {
      id: 87,
      category: 'React',
      question: 'What is the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)?',
      answer: 'In CSR, the server sends a minimal HTML file and a JavaScript bundle; the browser downloads and executes JS to build the DOM (slower first paint). In SSR, the server pre-renders the full HTML and sends it to the browser, resulting in a faster first contentful paint and better SEO, with JS hydrating the page afterward.'
    },
    {
      id: 88,
      category: 'React',
      question: 'What is state batching in React and why does it matter?',
      answer: 'State batching means React groups multiple setState calls within the same event handler or lifecycle into a single re-render cycle for performance. In React 18, automatic batching was extended to async operations (setTimeout, Promises). This prevents unnecessary intermediate renders when multiple pieces of state change together.'
    }
  ];


  // Search/Filters states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Track flipped state of cards by ID
  const [flippedCards, setFlippedCards] = useState({});

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React'];

  // Toggle card flip
  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Filter questions dynamically
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((q) => {
      const matchesSearch = 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        q.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="container page-spacing fade-in">
      {/* Header section */}
      <section className="interview-hero">
        <h1>Interview Preparation Hub</h1>
        <p>Test your core frontend knowledge. Type in search queries, toggle categories, and click flashcards to reveal answers.</p>
      </section>

      {/* Search & Filters Controls */}
      <section className="prep-filters-bar">
        <div className="search-input-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-field"
            aria-label="Search interview questions"
          />
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Flashcards */}
      {filteredQuestions.length > 0 ? (
        <div className="flashcards-grid">
          {filteredQuestions.map((q) => {
            const isFlipped = !!flippedCards[q.id];
            return (
              <div 
                key={q.id} 
                className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(q.id)}
                role="button"
                tabIndex="0"
                aria-label={`Interview question flashcard: ${q.question}. Click to flip.`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardFlip(q.id);
                  }
                }}
              >
                <div className="flashcard-inner">
                  {/* Card Front (The Question) */}
                  <div className="flashcard-front">
                    <span className="card-label-q">{q.category} Question</span>
                    <p className="card-text-q">{q.question}</p>
                    <span className="flip-prompt-indicator">Click to reveal answer 🔄</span>
                  </div>

                  {/* Card Back (The Answer) */}
                  <div className="flashcard-back">
                    <span className="card-label-a">Answer Overview</span>
                    <div className="card-text-a">
                      <p>{q.answer}</p>
                    </div>
                    <span className="flip-prompt-indicator">Click to view question 🔄</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-prep-results">
          <h3>No Questions Found</h3>
          <p>We couldn't find any question matching "{searchQuery}". Try a different keyword!</p>
          <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
            Clear Filters
          </Button>
        </div>
      )}
    </main>
  );
}
