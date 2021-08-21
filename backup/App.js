import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react';
import { EmployeeList } from './MyComponents/EmployeeList';
import { AddEmployee } from './MyComponents/AddEmployee';

//add validation...

function App() {

   var title = "Emp management"

   const onDelete = (employee) => {

      console.log("delete called...", employee)
      setEmployees(employeeList.filter((e) => {

         return e !== employee;
         //101 --> 102 <-- >103
      })
      )
   }

   const addEmployee =(employeename,age)=>{

      console.log("adding ",employeename,age)

      //auto increment... eId will ....
      const employee ={
         eId:1,
         eName:employeename,
         eAge :age
      }
      //spread operator  ... to use expand and iterate in array we can use spread operator,... angular ,java 
      //array ->push
      //push -> index  
      //push --> add ...
      setEmployees([...employeeList,employee])

   }
   const [employeeList, setEmployees] = useState([
      {
         eId: 101,
         eName: "jay",
         eAge: 20
      },
      {
         eId: 102,
         eName: "raj",
         eAge: 25
      },
      {
         eId: 103,
         eName: "parth",
         eAge: 23
      }

   ])

   return (

      <>

         <Header title={title} searchBar={true} />
         <AddEmployee addEmployee ={addEmployee}/>
         <EmployeeList employeeList={employeeList} onDelete={onDelete} />
         <Footer />
      </>
   );
}

export default App;
