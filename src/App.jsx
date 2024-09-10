import { useState } from 'react'
import Index from './index.js'
import Header from './Header.jsx';
import CalcButtons from './CalcButtons.jsx';
import Result from './Result.jsx';

function App(){
    
    return(
        <>
        <Header />
        <Result />
        <CalcButtons />
        </>
    );
}

export default App
