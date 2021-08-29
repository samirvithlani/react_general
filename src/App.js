import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react';
import { EmployeeList } from './MyComponents/EmployeeList';
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader'
import { Redirect, Route } from 'react-router-dom';
import { Welcome } from './Pages/Welcome'
import { Product } from './Pages/Product'
import { ProductDetail } from './Pages/ProductDetail'
import { SimpleForm } from './Pages/SimpleForm';
import { UserList } from './api/User-List';
import { UserDetail } from './api/User-Detail';
import { AddUser } from './api/Add-User';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react'
import { Child } from './Child';
import { SearchMovie } from './movie/SearchMovie';

//add validation...

//Employebean emp =new Employebean()
//emp.

export const GlobalInfo = createContext();

function App() {
    const [myColor, setMyColor] = useState('blue')


    return (
        // <GlobalInfo.Provider value ={{color:myColor}}>
        //     <h1 style={{ color: myColor }}>App js</h1>
        //     <Child/>
        // </GlobalInfo.Provider>

        <div>
            <SearchMovie />
        </div>

    )
}

export default App;
