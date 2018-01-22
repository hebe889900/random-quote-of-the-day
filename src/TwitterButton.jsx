import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon, SocialIcons} from 'react-social-icons';
import App from './app.jsx';

const urls = [
  'http://jaketrent.com',
  'http://twitter.com/jaketrent',
  'http://linkedin.com/in/jaketrent',
  'http://www.pinterest.com/jaketrent/artsy-fartsy/'
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