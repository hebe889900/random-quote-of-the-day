import React from 'react';
import ReactDOM from 'react-dom';
import he from 'he';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import TwitterButton from './TwitterButton.jsx';

class App extends React.Component {
   render() {
      return (
      	<MuiThemeProvider>
	         <div>
	         	<Card>
	         	    <CardHeader title= {this.props.title} 
					      titleColor = {this.props.titleColor} actAsExpander={true}
					      showExpandableButton={true}/>
	            <CardText color = {this.props.color}>{this.props.content}</CardText>
	            <CardActions id = "button"></CardActions>
	            <CardActions id = "socialbutton"></CardActions>
	            </Card>
	         </div>
         </MuiThemeProvider>
      );
   }
}

handleClick();

function handleClick(e){
	let rng = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
	let apiUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_=" + rng;
	axios.get(apiUrl)
	.then(function (response) {
		//alert("clicked");
		//alert(response.data[0].content);
		let content = he.decode(response.data[0].content).replace(/(<([^>]+)>)/ig,"");
		let title = response.data[0].title;
		let twitter_url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + content + '" ' + title;
		let tumblr_url = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + title + '&content=' + content + '&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button'
		let urls = [encodeURI(twitter_url),encodeURI(tumblr_url)];
		ReactDOM.render(
		<TwitterButton urls = {urls} />,
		document.getElementById('socialbutton')
		);		
		ReactDOM.render(
		<App title={response.data[0].title} content = {he.decode(response.data[0].content).replace(/(<([^>]+)>)/ig,"")}/>,
		document.getElementById('app')
		);
	})
	.catch(function (error) {
		console.log(error);
	});
}

export default App;