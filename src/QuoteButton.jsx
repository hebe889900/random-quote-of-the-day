import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import he from 'he';
import App from './app.jsx';

const colors = [["#B71C1C","#E57373"],["#880E4F","#F06292"],["#4A148C","#BA68C8"],["#1A237E","#5C6BC0"],["#0D47A1","#42A5F5"],["#01579B","#039BE5"],["#1B5E20","#43A047"]];
console.log(colors.length)

class QuoteButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  render() {
    return (
    <MuiThemeProvider>
      <RaisedButton onClick={handleClick}  labelColor = {"#FFFFFf"} label="New Quote" backgroundColor = {this.props.backgroundColor} />
      < /MuiThemeProvider>
    );
  }
}

function handleClick(e){
	let rng = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
	let rngColor = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
	console.log(rngColor)
	let color = colors[rngColor][0];
	const style = {
	  color: 'white',
	};


	ReactDOM.render(
		<QuoteButton backgroundColor={color}/>,
		document.getElementById('button')
	);
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