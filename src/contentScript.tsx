import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = document.createElement('div');
app.id = 'ai-summarizer-root';
document.body.appendChild(app);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	app
);
