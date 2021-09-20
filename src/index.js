import React from 'react';
import ReactDOM from 'react-dom';
import Memorize from './components/06-memos/Memorize';
import './index.css'
//import UseLayoutEffect from './components/05-useLayoutEffect/UseLayoutEffect';
//import ExampleUseRef from './components/04-useRef/ExampleUseRef';
//import FocusScreen from './components/04-useRef/FocusScreen';
//import MultipleCustomHook from './components/03-exampleHooks/MultipleCustomHook';
//import FormCustomHook from './components/02-useEffect/FormCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import CounterCustomHook from './components/01-useState/CounterCustomHook';
//import CounterApp from './components/01-useState/CounterApp';
//import HookApp from './HookApp';


ReactDOM.render(
  <React.StrictMode>
    <Memorize/>
  </React.StrictMode>,
  document.getElementById('root')
);