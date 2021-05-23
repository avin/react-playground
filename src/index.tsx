import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { prepareBrowser } from '@/utils/browser';

prepareBrowser();

ReactDOM.render(<div />, document.getElementById('root'));
