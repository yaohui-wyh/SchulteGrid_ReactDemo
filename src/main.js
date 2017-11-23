import ReactDOM from 'react-dom';
import React from 'react';
import Container from './components/Container';

window.requestAnimationFrame(() => {
  ReactDOM.render(<Container size={4}/>, document.getElementById('attach-point'));
});
