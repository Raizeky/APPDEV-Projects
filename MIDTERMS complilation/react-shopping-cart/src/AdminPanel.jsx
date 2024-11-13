import React ,{ useState } from 'react';
import Login from './Login';

export default function AdminPanel(props){
    let accounts = props.accounts

    const [devlogs, setDevlogs] = useState([])

    function AddDevlog(){
        let devlog ={
            date:new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            tittle:document.getElementById("title").value,
            content:document.getElementById("content").value,
        }
        setDevlogs(d => [...d, devlog])
        document.getElementById("title").value=" "
        document.getElementById("content").value=" "
    }

    const renderAccounts = () =>{
        return(
            accounts.map((account)=>{
                return(
                    <div>
                        <h2 key = {account.id}>{account.username}</h2>
                        <p>{account.role}</p>
                    </div>
                )
            })
        )
    }

    const renderDevlogHistory = () =>{
        return(
            devlogs.map((devlog)=>{
                return(
                    <div>
                        <h2>{devlog.title}</h2>
                        <p>{devlog.date}</p>
                        <p>{devlog.content}</p>
                    </div>
                )
            })
        )
    }

    if(props.isLoggedin === false){
        return <Login />;
    }else{
        return(
            <div>
            <h1>This is the Admin Panel!</h1>
            <p>This are the active accounts</p>
            {renderAccounts()}
            <br /><br />
            <h4>Admin Devlogs: </h4>
            Title: <input type="text" name="title" id="title"/>
            <br /><br />
            Content: <br />
            <textarea name="content" id="content" cols="50" rows="10"></textarea>
            <br />
            <button type="submit" onClick={AddDevlog}>Submit</button>
            <br /><br />
            <h4>Devlog History:</h4>
            {renderDevlogHistory()}
        </div>
        )
    }
}