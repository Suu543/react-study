# react-study

## React
- Developed by Facebook 2011
- Angular, Vue, Svelte
- Components = User Interfaces
- Root Component, Component Tree
- Independence
- Reusability
- Speed

## Goals
- Comfortable
- Apply Theory
- Build Your Own Projects

## Structure
- Dev Environment
- Tutorial
- Projects
- Redux

## Requirements
- HTML
- CSS
- JavaScript (ES6)

## Dev Environment Setup
- Node
- node --version, minimum 5.2.0 (npx)
- Browser = Chrome
- Text Editor = Visual Studio Code
- React Developer Tools

## Text Editor Setup
- https://github.com/john-smilga/VS-CODE-SETUP

# Install create-react-app

## Command Line Basics
- PWD - Full Pathname to Current Working Directory
- LS - List of Directories
- MKDIR - Create a Directory/Folder
- CD - Change a Directory
- CD .. - Navigate to Parent / One Level Up
- CLEAR - Clear Console
- Arrow Key Up / Down - Previous Commands

## NPM Basics
- npm init - creates `package.json` (manifest) file, list dependencies
- npm install <package name> --save
  - Install Package Locally (default) and add to `package.json`
- npm install <package name> -g
  - Install Package Globally (access anywhere) sudo
- npm install <package name> --save-dev
  - Use it only in development

## Test
npm init -y
npm install bootstrap --save

## What is create-react-app, babel, webpack
- https://github.com/facebook/create-react-app
- https://github.com/babel/babel
```cmd
npm i -g create-react-app
npx create-react-app my-app
cd my-app
npm start
```

## Folder Structure
```cmd
delete node_modules
npm install
npm run build // just static asset (Hosting Provider)
```

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Remove Boilerplate
src
  - App.css
  - App.js
  - App.test.js
  - index.css
  - logo.svg
  - serviceWorker.js
  - setupTests.js

## Error Case
- Hot Reload Stop Working
```.env
FASE_REFRESH=false
```
