import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import he from 'he';
import App from './app.jsx';

class QuoteButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  render() {
    return (
    <MuiThemeProvider>
      <RaisedButton onClick={handleClick} label="New Quote" />
      < /MuiThemeProvider>
    );
  }
}

function handleClick(e){
	let rng = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
	let apiUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_=" + rng;
	axios.get(apiUrl)
	.then(function (response) {
		//alert("clicked");
		//alert(response.data[0].content);
		ReactDOM.render(
		<App title={response.data[0].title} content = {he.decode(response.data[0].content).replace(/(<([^>]+)>)/ig,"")}/>,
		document.getElementById('app')
		);
	})
	.catch(function (error) {
		console.log(error);
	});
}

export default QuoteButton;