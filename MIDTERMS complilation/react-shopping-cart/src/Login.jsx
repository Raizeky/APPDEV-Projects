import { useState } from 'react';
import Shop from './Shop.jsx'
import AdminPanel from './AdminPanel.jsx';

export default function Login(){
    let items =[
        {id: 1, name: "Grape", price: 50},
        {id: 2, name: "Orange", price: 20},
        {id: 3, name: "Pickles", price: 40},
        {id: 4, name: "Watermelon", price: 70},
        {id: 5, name: "Cabbage", price: 35},
    ]
    
    //credentials for the account
    let accounts = [
        {id : 1, username: "customer", password: "customer", role:"customer"},
        {id : 2, username: "admin", password: "admin", role: "admin"},
    ]

    const [isLoggedIn, SetIsLoggedIn]= useState(false);

    const [role, setRole]= useState("")
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")

    function getUserName(event){// get usernames
        setEnteredUsernames(event.target.value)
    }

    function getPassword(event){// get passwords
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        accounts.map((account) =>{
            if (account.username === enteredUsernames && account.password === enteredPasswords){
                SetIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    function renderLogin(){
        return(
            <>
            <div>
                <h1>Login: </h1>
                <strong>Username:</strong> <input type="text" placeholder="username" id="username "onChange={getUserName} /> <br />
                <br />
                <strong>Password:</strong> <input type="text" placeholder="password" id="password" onChange={getPassword} /> <br />
                <br />
                <button onClick = {handleLogin}>Login</button>
            </div>
            </>
        )
    }

    function renderShop(){
        return(
            <Shop isLoggedIn = {isLoggedIn} 
            items = {items} />
        )
    }

    function renderAdmin(){
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    if (isLoggedIn === false){
        return renderLogin()
    }else{
        if(role === "admin"){
            return renderAdmin()
        }else{
            return renderShop()
        }
    }
}