import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/index.css';


const Index: React.FC = () => {
    return (
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
