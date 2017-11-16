import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import Layout from './layout/components/Layout';
import registerServiceWorker from './registerServiceWorker';

render(
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
