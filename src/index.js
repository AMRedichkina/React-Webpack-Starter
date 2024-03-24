import './assets/main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHello from './components/hello/hello.js';


document.addEventListener('DOMContentLoaded', function(){
    const root = ReactDOM.createRoot(document.querySelector('.app'));
    root.render(
        <>
            <AppHello/>
            <AppHello name='Alex'/>
        </>
    );
});