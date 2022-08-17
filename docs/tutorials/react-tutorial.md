---
id: react-tutorial
title: React JS
sidebar_label: React JS
description: How to use React JS to build a web application
keywords: [React JS, How to use React JS, How to build a web application, How to use React JS to build a web application, React JS tutorial, What is React, Learn React, First Steps with React]
---

React is a JavaScript library that will be used to build web interfaces and mobile applications with an extension called [React Native](https://reactnative.dev/). React works with units of code that work independently. React also uses a tool called JSX that allows a very simple interaction with JavaScript, that is, it can also be used with HTML in a simple way.

>For more information, visit [ReactJs](https://reactjs.org)  

## Tools

For React the following tools are suggested, tools with * are required:

* Web Browser (Google Chorme, Moxilla Firefox)*
* [Node JS](https://nodejs.org/en/)*
* Package Managers ([Brew](https://brew.sh/index_es), [Chocolatey](https://chocolatey.org/) ).
* Terminal, it can be used with the native terminal but we recommend [iTerm2](https://iterm2.com/), [Hyper](https://hyper.is/), [cmder](https://cmder.net/).
* Code editor, it is suggested to use [Visual Studio Code](https://code.visualstudio.com/).  

## Extensions

These extensions are a recommendation to improve your experience in developing with React.

* Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es),  
this is in the chrome web store (Web Navigator)
* Debugger for Chrome (Visual Studio Code)
* React Extension Pack (Visual Studio Code)
* Auto Close Tag (Visual Studio Code)
* Prettier - Code Formatter (Visual Studio Code)
* ESLint - JavaScript standards (Visual Studio Code)


## Recommendations

It is important for the development of a good project to organize the different components of the work, for this reason it is recommended to generate folders that have similar content, some examples are:

* *Components* folder, where the necessary components are stored.
* *Styles* folder, where the project styles are stored, for example the `.css` files.
* *Assets* folder, where the application static resources such as images are stored.


>Remember to change the references once your project is ordered and not make changes, unless it is really necessary, in the index.js 

### JavaScript Standards

It is important to follow the JavaScript standards, it is recommended to use the [ESLint](https://eslint.org/) library to help you follow these [JavaScript standards](https://standardjs.com/rules.html).

## Virtual DOM

**Document Object Model for Document Representation** (Document Object Model) is essentially a platform interface that provides a standard set of objects to represent HTML, XHTML and XML documents. A standard model on how these objects can be combined, and a standard interface to access and manipulate them.

React realized that updating the full screen is a task that can be costly in performance and time. Then a virtual DOM is created. This virtual DOM object is identical to the JavaScript DOM object.

### How does it work?

* The entire virtual DOM is updated.
* Virtual DOM is compared to a version prior to upgrade. React notices which objects have changed.
* The updated object and only that object is updated in the actual DOM.
* Changes to the actual DOM cause the screen to change.

>This process is known as reconciliation.

* * *

## Check Versions

Verify Node js, with these commands you can verify the version and also if they are installed.

```shell
$ node -v
#v14.15.2
$ npm -v
#6.14.9
```

## Start the First Application with React

We are going to create a first application with React where some of React's functionalities will be reflected, in this case you must change "name_of_your_application" to the name you want, to make it easier to read from now on my- app.

```shell
$ npx create-react-app "name_of_your_application"
```
Now you must enter your my-app directory and start your application.

```shell
$ cd my-app
$ yarn start
```
To see your code you must use, duplicating your terminal, the following: 

```shell
$ code .
```

## First steps

Once the code has been opened in your editor, in this case recommended Visual Studio Code, you can navigate until you find inside the *src* folder the `App.js` file with a content equal to this:

```javascript
import logo from './logo.svg';

import './App.css';

function App() {
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

You can change the content to the following and make the changes you want as the first steps for your adventure in React. In addition, you can see the changes in your browser, for this you must keep your terminal with the server open.

```javascript
import { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
```

## What are Components?

Components are defined as a single unit of code that will have a specifically assigned responsibility that certain behaviors can be encapsulated in components.

This is an example of a component. Create a new file inside your `components` folder with the name of `header.js` and in this way you can use it later. This type of component is no longer used in EOS Costa Rica, however it is important to understand its definition and use.

```javascript
import React, { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div>
                <h1>Example </h1>
            </div>
        );
    }
}

export default Header;
```

This component can be used as follows inside the `App.js`:

```javascript
import { Component } from 'react';

import './styles/App.css';

import Header from "./components/header" //The import of the component must be added

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header />   /*Component is added*/
      </div>
    );
  }
}

export default App;
```

### Components

<iframe
width="100%" height="350" src="https://www.youtube.com/embed/Y2hgEGPzTZY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
</iframe>

### Component Life Cycle

<iframe
width="100%" height="350" src="https://www.youtube.com/embed/qnN_FuFNq2g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
</iframe>

### Higher Order Component (HoC)

* * *

>*"A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API. They are a pattern that arises from the compositional nature of React."*  

* * *


For more information on [HoC](https://reactjs.org/docs/higher-order-components.html#:~:text=Un%20componente%20de%20orden%20superior,de%20la%20l%C3%B3gica%20de%20componentes.&text=En%20concreto%2C%20un%20componente%20de,y%20devuelve%20un%20nuevo%20componente.).

## Components in EOS Costa Rica

React uses reusable components for all applications, these components can have several versions, which can generate conflicts when making small changes. [Storybook](https://storybook.js.org/) is an opensource tool that is used to create visual components in isolation where the components and their versions can be organized in stories.

EOS Costa Rica uses [Storybook EOS Costa Rica](https://components.edenia.cloud/) for the creation of its components. To use these `eoscr-components` components we leave you the installation guide in [EOS CR Components](https://www.npmjs.com/package/@eoscostarica/eoscr-components#installation).

### Storybook

<iframe
width="100%" height="350" src="https://www.youtube.com/embed/BySFuXgG-ow" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
</iframe>

## Main Concepts

Next, we give you a list of elements that are taken from the official React documentation to apply in your project.

* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
* [Components and Properties](https://reactjs.org/docs/components-and-props.html)
* [Status and Life Cycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [Handling Events](https://reactjs.org/docs/handling-events.html)
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
* [Forms](https://reactjs.org/docs/forms.html)
* [Raising the State](https://reactjs.org/docs/lifting-state-up.html)
* [Composition vs. Heritage](https://reactjs.org/docs/composition-vs-inheritance.html)

## What's new in react?

### Hooks

Hooks are a new feature in React 16.8. These allow you to use the state and other features of React without writing a class.

Hooks are functions that allow you to "hook" React state and lifecycle from functional components. Hooks don't work inside classes they allow you to use React without classes. (We don't recommend rewriting your existing components overnight, but you can start using Hooks on new ones if you want).

It has:

* [State Hook](https://reactjs.org/docs/hooks-state.html)
* [Effect Hook](https://reactjs.org/docs/hooks-effect.html)
* [Context Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)

Other types:

* [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
* [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
* [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
* [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
* [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
* [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
* [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

This is an example of use, you can replace the code of your `App.js` to test it. In this example they show the dimensions of the screen even when it is resized.

```javascript
import React , { useState, useEffect } from "react";

import "./styles/App.css"

const App = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const [height, setHeight]= useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect( () => {
    window.addEventListener('resize', updateDimensions);

    return() => {
      window.removeEventListener('resize',updateDimensions);
    }
  }
  )

  return(
    <div className="App">
      Width = {width}
      <br/>
      Height = {height}
    </div>
  );
}

export default App;
```

[**Recommended Rules**](https://reactjs.org/docs/hooks-rules.html)

>For more information, visit [ReactJs Hooks Intro](https://reactjs.org/docs/hooks-intro.html)  

## React Cleaner with Hooks

<iframe
width="100%" height="350" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy">
</iframe>