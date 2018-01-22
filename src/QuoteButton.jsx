import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app.jsx'

class QuoteButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  render() {
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
}

function handleClick(e){
	const rng = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
	const apiUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_=" + rng;
	axios.get(apiUrl)
	.then(function (response) {
		//alert("clicked");
		//alert(response.data[0].content);
		ReactDOM.render(
		<App title={response.data[0].title} content = {unescape(response.data[0].content).replace(/(<([^>]+)>)/ig,"")}/>,
		document.getElementById('app')
		);
	})
	.catch(function (error) {
		console.log(error);
	});
}

export default QuoteButton;