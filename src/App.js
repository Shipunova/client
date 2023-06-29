import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useContext } from 'react';
import { Context } from '.'; 
import { observer } from 'mobx-react-lite';

function App () {
    const {user} = useContext(Context)

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;