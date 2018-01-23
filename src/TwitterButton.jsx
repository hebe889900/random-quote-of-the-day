import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon, SocialIcons} from 'react-social-icons';
import App from './app.jsx';

const urls = [
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20can't%20get%20rid%20of%20the%20skeleton%20in%20your%20closet%2C%20you'd%20best%20teach%20it%20to%20dance.%22%20George%20Bernard%20Shaw",
  "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Oscar%20Wilde&content=The%20only%20way%20to%20get%20rid%20of%20a%20temptation%20is%20to%20yield%20to%20it.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
];
class TwitterButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  render() {
    return (
		<SocialIcons urls={urls} />
    );
  }
}



export default TwitterButton;