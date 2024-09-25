interface Test {
  question: string;
  options: string[];
  answer: number;
}

export interface Tests {
  html: Test[];
  css: Test[];
  javascript: Test[];
  react: Test[];
  // Add other types if necessary
}

export const tests: Tests = {
  html: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'Home Tool Markup Language',
        'Hyperlinks and Text Markup Language',
        'Hyperlinks and Text Modulation Language',
      ],
      answer: 0,
    },
    {
      question: 'Which HTML element is used to define the title of a document?',
      options: ['<body>', '<head>', '<title>', '<header>'],
      answer: 2,
    },
    {
      question: 'How can you make a numbered list in HTML?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      answer: 1,
    },
    {
      question: 'What is the correct way to create a hyperlink in HTML?',
      options: [
        "<a url='www.example.com'>Link</a>",
        "<a href='www.example.com'>Link</a>",
        "<a link='www.example.com'>Link</a>",
        "<link href='www.example.com'>Link</a>",
      ],
      answer: 1,
    },
    {
      question: 'Which HTML tag is used for inserting an image?',
      options: ['<img>', '<picture>', '<src>', '<image>'],
      answer: 0,
    },
    {
      question: 'How do you create a comment in HTML?',
      options: ['<!-- Comment -->', '// Comment', '/* Comment */', '# Comment'],
      answer: 0,
    },
    {
      question:
        'Which of the following tags is used to define an unordered list?',
      options: ['<li>', '<ol>', '<ul>', '<list>'],
      answer: 2,
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      options: ['<lb>', '<br>', '<break>', '<line>'],
      answer: 1,
    },
    {
      question:
        'Which HTML attribute specifies an alternate text for an image?',
      options: ['title', 'alt', 'src', 'text'],
      answer: 1,
    },
    {
      question: 'Which tag is used to create a table in HTML?',
      options: ['<table>', '<tab>', '<td>', '<th>'],
      answer: 0,
    },
    {
      question: 'Which HTML attribute is used to define inline styles?',
      options: ['font', 'style', 'class', 'styles'],
      answer: 1,
    },
    {
      question: 'What is the purpose of the <meta> tag?',
      options: [
        'To link to external CSS files',
        'To define metadata about the document',
        'To create hyperlinks',
        'To embed multimedia content',
      ],
      answer: 1,
    },
    {
      question: 'Which HTML tag is used to define the footer of a document?',
      options: ['<bottom>', '<footer>', '<foot>', '<end>'],
      answer: 1,
    },
    {
      question: 'How do you specify a background color for an HTML page?',
      options: [
        '<background-color>',
        "<body style='background-color:color;'>",
        "<color='background'>",
        '<bgcolor>',
      ],
      answer: 1,
    },
    {
      question: 'What does the <h1> tag represent in HTML?',
      options: ['Header 1', 'Hyperlink 1', 'High-priority text', 'Heading 1'],
      answer: 0,
    },
    {
      question: 'Which tag is used to define a paragraph in HTML?',
      options: ['<para>', '<p>', '<text>', '<paragraph>'],
      answer: 1,
    },
    {
      question: 'How do you open a link in a new tab in HTML?',
      options: [
        "target='_self'",
        "target='_blank'",
        "target='_new'",
        "target='_window'",
      ],
      answer: 1,
    },
    {
      question: 'Which tag is used to display preformatted text in HTML?',
      options: ['<code>', '<pre>', '<format>', '<text>'],
      answer: 1,
    },
    {
      question:
        'Which of the following is the correct way to make text bold in HTML?',
      options: ['<strong>', '<bold>', '<bld>', '<btext>'],
      answer: 0,
    },
    {
      question:
        'What is the correct syntax for adding a video to an HTML page?',
      options: [
        "<video controls src='video.mp4'>",
        "<video src='video.mp4'>",
        "<vid src='video.mp4' controls>",
        "<media src='video.mp4' controls>",
      ],
      answer: 0,
    },
    {
      question:
        'Which HTML attribute is used to define the character encoding?',
      options: ['charset', 'type', 'encode', 'code'],
      answer: 0,
    },
    {
      question: 'Which HTML tag is used to create a dropdown list?',
      options: ['<input>', '<select>', '<dropdown>', '<list>'],
      answer: 0,
    },
    {
      question: 'How do you create a checkbox in HTML?',
      options: [
        "<input type='checkbox'>",
        '<check>',
        "<input type='box'>",
        "<input checkbox='true'>",
      ],
      answer: 0,
    },
    {
      question: 'What is the correct way to specify a font in HTML?',
      options: [
        "<font type='arial'>",
        "<text style='arial'>",
        "<style='font-family:arial;'>",
        "<font-face='arial'>",
      ],
      answer: 2,
    },
    {
      question: 'What is the default file extension for HTML files?',
      options: ['.txt', '.html', '.htm', '.web'],
      answer: 1,
    },
    {
      question: 'Which HTML tag is used to embed an external JavaScript file?',
      options: ['<js>', '<script>', '<link>', '<code>'],
      answer: 1,
    },
    {
      question: 'How do you add an email link in HTML?',
      options: [
        "<a href='email@example.com'>Email</a>",
        "<a href='mailto:email@example.com'>Email</a>",
        "<a href='emailto:email@example.com'>Email</a>",
        "<a email='email@example.com'>Email</a>",
      ],
      answer: 1,
    },
    {
      question: 'Which tag is used to add a section in an HTML document?',
      options: ['<section>', '<div>', '<article>', '<aside>'],
      answer: 0,
    },
    {
      question: "What is the purpose of the 'id' attribute in HTML?",
      options: [
        'To define inline styles',
        'To link to JavaScript functions',
        'To uniquely identify an element',
        'To style elements based on class',
      ],
      answer: 2,
    },
    {
      question: 'Which tag is used to define a navigation section in HTML?',
      options: ['<nav>', '<menu>', '<navigate>', '<section>'],
      answer: 0,
    },
  ],
  css: [
    {
      question: 'Which CSS property controls the margins between elements?',
      options: ['padding', 'margin', 'border', 'gap'],
      answer: 1,
    },
    {
      question: 'Which CSS property controls the size of text?',
      options: ['font-style', 'font-size', 'text-transform', 'text-decoration'],
      answer: 1,
    },
    {
      question: 'How can you horizontally center a block element?',
      options: [
        'text-align: center;',
        'margin: 0 auto;',
        'display: inline-block;',
        'position: absolute;',
      ],
      answer: 1,
    },
    {
      question: "What does the 'position: fixed;' property mean?",
      options: [
        'The element moves with the page when scrolling',
        'The element is always fixed relative to its parent element',
        'The element stays in the same place even when scrolling',
        'The element is fixed inside its container',
      ],
      answer: 2,
    },
    {
      question: 'Which property is used to change the background color?',
      options: ['background-color', 'color', 'border-color', 'outline-color'],
      answer: 0,
    },
    {
      question: "What does the 'display: none;' property do?",
      options: [
        'Hides the element but leaves the space it occupies',
        'Hides the element and leaves no space',
        'Displays the element below all others',
        'The element becomes invisible but can still be clicked',
      ],
      answer: 1,
    },
    {
      question:
        "Which unit in CSS is used for relative size based on the parent's font size?",
      options: ['px', '%', 'em', 'vh'],
      answer: 2,
    },
    {
      question: "What does 'z-index' in CSS mean?",
      options: [
        'Defines the height of the element',
        'Defines the visibility of the element',
        'Determines the vertical position of the element relative to others',
        'Determines the stacking order of the element on the z-axis',
      ],
      answer: 3,
    },
    {
      question:
        "Which value of the 'border-style' property will create a solid line?",
      options: ['dotted', 'dashed', 'solid', 'none'],
      answer: 2,
    },
    {
      question: 'Which CSS property is used to create space inside an element?',
      options: ['margin', 'padding', 'border', 'height'],
      answer: 1,
    },
    {
      question:
        "Which value of the 'display' property makes an element inline?",
      options: ['block', 'inline', 'flex', 'grid'],
      answer: 1,
    },
    {
      question: 'How can you change the text color in CSS?',
      options: ['color', 'text-color', 'font-color', 'background-color'],
      answer: 0,
    },
    {
      question:
        'Which property would you use to make an element float to the right?',
      options: [
        'position: right;',
        'float: right;',
        'display: right;',
        'align: right;',
      ],
      answer: 1,
    },
    {
      question: 'Which property controls the opacity of an element?',
      options: ['visibility', 'opacity', 'filter', 'transparent'],
      answer: 1,
    },
    {
      question:
        "Which value of the 'position' property allows relative positioning?",
      options: ['absolute', 'fixed', 'relative', 'sticky'],
      answer: 2,
    },
    {
      question: 'How do you apply a CSS style to a specific class?',
      options: ['#className', '.className', 'className:', '*className'],
      answer: 1,
    },
    {
      question: 'Which property is used to set the size of an image?',
      options: ['background-size', 'object-size', 'img-size', 'size'],
      answer: 0,
    },
    {
      question: 'How can you prevent text selection within an element?',
      options: [
        'text-select: none;',
        'user-select: none;',
        'no-select: true;',
        'text-select: false;',
      ],
      answer: 1,
    },
    {
      question: 'Which property is used to set an image as the background?',
      options: [
        'background-image',
        'background-color',
        'background-opacity',
        'background-position',
      ],
      answer: 0,
    },
    {
      question: 'How can you hide an element but keep it in the DOM?',
      options: [
        'display: none;',
        'visibility: hidden;',
        'opacity: 0;',
        'z-index: -1;',
      ],
      answer: 1,
    },
    {
      question: 'Which CSS property controls the height of elements?',
      options: ['max-height', 'min-height', 'height', 'vertical-size'],
      answer: 2,
    },
    {
      question:
        'Which property is used to position an element relative to the viewport?',
      options: ['relative', 'absolute', 'fixed', 'static'],
      answer: 2,
    },
    {
      question: 'How can you add space between words?',
      options: [
        'letter-spacing',
        'word-spacing',
        'text-spacing',
        'line-height',
      ],
      answer: 1,
    },
    {
      question:
        'Which CSS property is used to define the shape of the edges of an element?',
      options: [
        'border-radius',
        'border-style',
        'outline-radius',
        'box-shadow',
      ],
      answer: 0,
    },
    {
      question:
        'Which CSS property allows you to arrange elements into columns?',
      options: [
        'grid-template-columns',
        'column-count',
        'flex-direction',
        'display',
      ],
      answer: 2,
    },
    {
      question: "Which CSS property controls the size of an element's border?",
      options: ['border', 'padding', 'margin', 'box-sizing'],
      answer: 0,
    },
    {
      question: 'How can you create a drop shadow in CSS?',
      options: ['shadow-box', 'box-shadow', 'border-shadow', 'outline-shadow'],
      answer: 1,
    },
    {
      question: 'Which CSS property controls the width of elements?',
      options: ['max-width', 'min-width', 'width', 'horizontal-size'],
      answer: 2,
    },
    {
      question: 'How can you align text to the center of elements?',
      options: [
        'text-align: center;',
        'justify-content: center;',
        'align-content: center;',
        'vertical-align: middle;',
      ],
      answer: 0,
    },
    {
      question: 'Which CSS property is used to create layouts in a CSS grid?',
      options: [
        'grid-template-areas',
        'grid-template-rows',
        'grid-gap',
        'grid-area',
      ],
      answer: 1,
    },
  ],
  javascript: [
    {
      question:
        'What is the correct syntax for referring to an external script in JavaScript?',
      options: [
        "<script href='xxx.js'>",
        "<script name='xxx.js'>",
        "<script src='xxx.js'>",
        "<script link='xxx.js'>",
      ],
      answer: 2,
    },
    {
      question: 'Which company developed JavaScript?',
      options: ['Netscape', 'Mozilla', 'Microsoft', 'Google'],
      answer: 0,
    },
    {
      question: 'How do you create a function in JavaScript?',
      options: [
        'function = myFunction()',
        'function:myFunction()',
        'function myFunction()',
        'create function myFunction()',
      ],
      answer: 2,
    },
    {
      question: "How do you call a function named 'myFunction' in JavaScript?",
      options: [
        'call myFunction()',
        'call function myFunction()',
        'myFunction()',
        'execute myFunction()',
      ],
      answer: 2,
    },
    {
      question: 'How do you write a conditional statement in JavaScript?',
      options: ['if i = 5 then', 'if (i == 5)', 'if i == 5 then', 'if (i = 5)'],
      answer: 1,
    },
    {
      question: 'What is the correct way to write a JavaScript array?',
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      ],
      answer: 2,
    },
    {
      question: 'Which event occurs when the user clicks on an HTML element?',
      options: ['onchange', 'onclick', 'onmouseclick', 'onmouseover'],
      answer: 1,
    },
    {
      question: 'How can you add a comment in JavaScript?',
      options: [
        '<!-- This is a comment -->',
        '// This is a comment',
        "'This is a comment'",
        '/* This is a comment */',
      ],
      answer: 1,
    },
    {
      question: 'What is the correct way to declare a JavaScript variable?',
      options: [
        'variable carName;',
        'var carName;',
        'v carName;',
        'carName = var;',
      ],
      answer: 1,
    },
    {
      question: 'Which operator is used to assign a value to a variable?',
      options: ['*', '-', '=', '+'],
      answer: 2,
    },
    {
      question: 'What will the following code return: Boolean(10 > 9)?',
      options: ['true', 'false', 'NaN', 'undefined'],
      answer: 0,
    },
    {
      question: 'What will the following code output: console.log(typeof []);?',
      options: ['object', 'array', 'undefined', 'null'],
      answer: 0,
    },
    {
      question:
        'Which built-in method calls a function for each element in an array?',
      options: ['while()', 'loop()', 'forEach()', 'for()'],
      answer: 2,
    },
    {
      question:
        'How do you round a number to the nearest integer in JavaScript?',
      options: ['Math.rnd()', 'Math.round()', 'rnd()', 'round()'],
      answer: 1,
    },
    {
      question:
        'Which of the following is a way to create an object in JavaScript?',
      options: [
        'var obj = { }',
        'var obj = [ ]',
        'var obj = ()',
        'var obj = Object[]',
      ],
      answer: 0,
    },
    {
      question: "What does 'NaN' stand for in JavaScript?",
      options: [
        'Not a Number',
        'Null and Null',
        'No a Null',
        'None are Numbers',
      ],
      answer: 0,
    },
    {
      question: 'How do you find the length of a string in JavaScript?',
      options: [
        'string.length',
        'string.size',
        'lengthOfString()',
        'string.len',
      ],
      answer: 0,
    },
    {
      question:
        'Which keyword is used to prevent modification of object properties?',
      options: ['const', 'let', 'immutable', 'static'],
      answer: 0,
    },
    {
      question: "How can you detect the client's browser name?",
      options: [
        'client.navName',
        'browser.name',
        'navigator.appName',
        'window.appName',
      ],
      answer: 2,
    },
    {
      question: "What is the purpose of 'use strict' in JavaScript?",
      options: [
        'To enable ES6 syntax',
        'To prevent certain JavaScript actions from being executed',
        'To enforce stricter parsing and error handling',
        'To allow undeclared variables',
      ],
      answer: 2,
    },
    {
      question:
        'Which of the following is NOT a reserved keyword in JavaScript?',
      options: ['default', 'finally', 'catch', 'loop'],
      answer: 3,
    },
    {
      question: "What is the output of 'console.log(null == undefined);'?",
      options: ['true', 'false', 'null', 'undefined'],
      answer: 0,
    },
    {
      question:
        'Which method can be used to parse a string to an integer in JavaScript?',
      options: ['parseInt()', 'parseInteger()', 'Number()', 'StringToInt()'],
      answer: 0,
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: [
        'Checks equality only',
        'Checks equality and type',
        'Assigns a value',
        'Checks inequality',
      ],
      answer: 1,
    },
    {
      question: 'What is an anonymous function in JavaScript?',
      options: [
        'A function without parameters',
        'A function that is called immediately',
        'A function without a name',
        'A function that never returns',
      ],
      answer: 2,
    },
    {
      question: 'What will the following code return: typeof null?',
      options: ["'null'", "'object'", "'undefined'", "'number'"],
      answer: 1,
    },
    {
      question:
        'Which method is used to access HTML elements using JavaScript?',
      options: ['getElementById()', 'getElement()', 'getNode()', 'getHtml()'],
      answer: 0,
    },
    {
      question: 'How do you declare a JavaScript variable with block scope?',
      options: ['let', 'var', 'const', 'define'],
      answer: 0,
    },
    {
      question:
        'What will the following code output: \'console.log(1 + "2");\'?',
      options: ["'12'", "'3'", "'NaN'", "'undefined'"],
      answer: 0,
    },
    {
      question:
        'Which method is used to remove the last element from an array?',
      options: ['shift()', 'pop()', 'delete()', 'remove()'],
      answer: 1,
    },
  ],
  react: [
    {
      question: 'What is React?',
      options: [
        'A programming language',
        'A JavaScript library for building user interfaces',
        'A database',
        'A CSS framework',
      ],
      answer: 1,
    },
    {
      question: 'Who developed React?',
      options: ['Google', 'Microsoft', 'Facebook', 'Amazon'],
      answer: 2,
    },
    {
      question: 'What is JSX?',
      options: [
        'A JavaScript framework',
        'A syntax extension for JavaScript',
        'A CSS preprocessor',
        'A database query language',
      ],
      answer: 1,
    },
    {
      question: 'How do you create a functional component in React?',
      options: [
        'function MyComponent()',
        'class MyComponent extends Component',
        'create function MyComponent()',
        'function MyComponent{}',
      ],
      answer: 0,
    },
    {
      question: 'What is the purpose of props in React?',
      options: [
        "To store component's internal state",
        'To pass data from parent to child components',
        'To manage side effects',
        'To modify the DOM directly',
      ],
      answer: 1,
    },
    {
      question: 'Which hook is used to add state to a functional component?',
      options: ['useState', 'useEffect', 'useContext', 'useReducer'],
      answer: 0,
    },
    {
      question: 'What is the virtual DOM in React?',
      options: [
        'A lightweight copy of the actual DOM',
        'A new HTML standard',
        'A database for storing app data',
        'A JavaScript rendering engine',
      ],
      answer: 0,
    },
    {
      question: "What does 'useEffect' hook do?",
      options: [
        'Updates the state',
        'Handles side effects like data fetching',
        'Passes props to a component',
        'Adds a CSS style to the component',
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the 'key' attribute in React lists?",
      options: [
        'To add custom styles',
        'To provide a unique identifier for list items',
        'To update the state',
        'To optimize component performance',
      ],
      answer: 1,
    },
    {
      question: 'How can you pass data from one component to another in React?',
      options: [
        'By using state',
        'By using props',
        'By using Redux',
        'By using CSS',
      ],
      answer: 1,
    },
    {
      question:
        'What is the default port used by the React development server?',
      options: ['3000', '8080', '5000', '8000'],
      answer: 0,
    },
    {
      question: 'How do you handle events in React?',
      options: [
        'By using traditional DOM methods like addEventListener',
        "By using the 'on' event handler syntax (e.g., onClick)",
        'By directly modifying the DOM',
        'By using jQuery',
      ],
      answer: 0,
    },
    {
      question: 'What is the purpose of React.Fragment?',
      options: [
        'To group multiple elements without adding extra nodes to the DOM',
        'To create functional components',
        'To handle errors in rendering',
        'To manage component state',
      ],
      answer: 0,
    },
    {
      question: 'How do you conditionally render a component in React?',
      options: [
        'Using the renderIf function',
        'Using JavaScript conditional expressions like if or ternary operators',
        'Using a CSS class',
        'By modifying the DOM manually',
      ],
      answer: 1,
    },
    {
      question: "What does the 'useRef' hook do in React?",
      options: [
        'Handles side effects',
        'Provides a way to access DOM elements or keep mutable values',
        'Adds styling to a component',
        'Fetches data from APIs',
      ],
      answer: 1,
    },
    {
      question: 'What is ReactDOM used for?',
      options: [
        'Managing state in React',
        'Rendering React components to the DOM',
        'Handling side effects',
        'Adding event listeners',
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the 'useReducer' hook in React?",
      options: [
        'To handle component lifecycle',
        'To manage complex state logic',
        'To fetch data from an API',
        'To validate props',
      ],
      answer: 1,
    },
    {
      question: "What does 'React.memo' do?",
      options: [
        'Triggers a re-render',
        'Memoizes a component to prevent unnecessary re-renders',
        'Fetches data from an API',
        'Binds event handlers',
      ],
      answer: 1,
    },
    {
      question:
        'Which lifecycle method is called after a component has been rendered in React (class components)?',
      options: [
        'componentDidMount',
        'componentWillUnmount',
        'shouldComponentUpdate',
        'componentWillUpdate',
      ],
      answer: 0,
    },
    {
      question: 'How can you improve performance in a large React app?',
      options: [
        'Use React.memo',
        'Avoid using the key attribute',
        'Use inline styles for every component',
        'Use synchronous data fetching',
      ],
      answer: 0,
    },
    {
      question: 'How do you create a new React project using the CLI?',
      options: [
        'npm start react-app',
        'npm create react-app',
        'npx create-react-app',
        'npm install create-react-app',
      ],
      answer: 2,
    },
    {
      question: 'What is the purpose of prop-types in React?',
      options: [
        'To fetch data from an API',
        'To validate props passed to components',
        'To manage state',
        'To optimize performance',
      ],
      answer: 1,
    },
    {
      question:
        'Which method is used to update the state in a React component?',
      options: ['setState', 'updateState', 'modifyState', 'refreshState'],
      answer: 0,
    },
    {
      question: 'What is the difference between state and props in React?',
      options: [
        'State is immutable, props are mutable',
        'Props are immutable, state is mutable',
        'Both are immutable',
        'Both are mutable',
      ],
      answer: 1,
    },
    {
      question: 'How do you pass state from one component to another in React?',
      options: [
        'By using props',
        'By using Redux',
        'By using context API',
        'By using localStorage',
      ],
      answer: 2,
    },
    {
      question:
        'Which React hook is used to handle side effects such as API calls?',
      options: ['useState', 'useEffect', 'useContext', 'useReducer'],
      answer: 1,
    },
    {
      question: 'What is a controlled component in React?',
      options: [
        'A component that does not handle its state',
        'A component that controls another component',
        'A component whose form data is handled by the React state',
        'A component that is only rendered on the server',
      ],
      answer: 2,
    },
    {
      question:
        'How can you prevent a component from re-rendering unnecessarily in React?',
      options: [
        'By using React.memo',
        'By passing different props each time',
        'By using inline styles',
        'By calling forceUpdate',
      ],
      answer: 0,
    },
    {
      question: 'What is the Context API in React used for?',
      options: [
        'To handle side effects',
        'To manage global state and pass data between components',
        'To validate props',
        'To optimize rendering',
      ],
      answer: 1,
    },
  ],
};
