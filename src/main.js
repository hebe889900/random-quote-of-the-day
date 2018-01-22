import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import QuoteButton from './QuoteButton.jsx';
import TwitterButton from './TwitterButton.jsx';

InitializePage();
RenderButton();
RenderSocialButton();


function InitializePage(){
	ReactDOM.render(<App />, document.getElementById('app'));
}

function RenderButton(){
	ReactDOM.render(<QuoteButton />, document.getElementById('button'));
}

function RenderSocialButton(){
	ReactDOM.render(<TwitterButton />, document.getElementById('socialbutton'));
}


