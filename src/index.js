import React from 'react';
import ReactDOM from 'react-dom';
import MultipleCustomHook from './components/03-exampleHooks/MultipleCustomHook';
import './index.css'
//import FormCustomHook from './components/02-useEffect/FormCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import CounterCustomHook from './components/01-useState/CounterCustomHook';
//import CounterApp from './components/01-useState/CounterApp';
//import HookApp from './HookApp';


ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHook/>
  </React.StrictMode>,
  document.getElementById('root')
);