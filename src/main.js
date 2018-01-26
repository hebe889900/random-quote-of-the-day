import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import QuoteButton from './QuoteButton.jsx';
import TwitterButton from './TwitterButton.jsx';


InitializePage();
RenderButton();
RenderSocialButton();


function InitializePage(){
	ReactDOM.render(<App />, document.getElementById('app'));
}

function RenderButton(){
	ReactDOM.render(<QuoteButton backgroundColor = {"#212121"}/>, document.getElementById('button'));
}

function RenderSocialButton(){
	ReactDOM.render(<TwitterButton />, document.getElementById('socialbutton'));
}


