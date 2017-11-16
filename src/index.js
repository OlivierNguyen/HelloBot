import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout/components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
