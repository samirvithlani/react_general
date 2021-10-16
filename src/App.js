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
import { Forms } from './forms/Forms';
import { Form2 } from './forms/Form2';

//add validation...

//Employebean emp =new Employebean()
//emp.

export const GlobalInfo = createContext();




function App() {
    const [myColor, setMyColor] = useState('blue')


    const data = { 0: '+376', 1: '+93', 2: '+1268', 3: '+1264', 4: '+355', 5: '+374', 6: '+244', 7: '+672', 8: '+54', 9: '+1684', 10: '+43', 11: '+61', 12: '+297', 13: '+358', 14: '+994', 15: '+387', 16: '+1246', 17: '+880', 18: '+32', 19: '+226' }
    const arr = []
    Object.keys(data).forEach(key => arr.push({ name: key, value: data[key] }))//console.warn(arrayData)
    console.log(arr)





    return (
        // <GlobalInfo.Provider value ={{color:myColor}}>
        //     <h1 style={{ color: myColor }}>App js</h1>
        //     <Child/>
        // </GlobalInfo.Provider>

        <div>
            {/* <SearchMovie /> */}
            
            <Form2 />
        </div>

    )
}

export default App;
