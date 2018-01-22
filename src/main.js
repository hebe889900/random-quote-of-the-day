import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import QuoteButton from './QuoteButton.jsx';

InitializePage();
RenderButton();



function InitializePage(){
	ReactDOM.render(<App />, document.getElementById('app'));
}

function RenderButton(){
	ReactDOM.render(<QuoteButton />, document.getElementById('button'));
}



