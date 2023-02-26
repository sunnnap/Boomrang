import Modal from "react-modal";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import {  useNavigate } from 'react-router-dom';
import './Useform.css'
export function LoginForm() {
    const [username, setUsername] = useState('');
    const [Login, setLogin] = useState(true)
    const [Isvalid, setIsvalid] = useState("")
    const [Isvalidpass, setIsvalidpass] = useState("")
    const [password, setPassword] = useState({
        password: '',
        comfirmpassword: '',
    });
    const [cookie, setCookie, removeCookie] = useCookies();
    const Navigate = useNavigate();

    function handlenamechange(e) {
        setUsername(e.target.value);
        if (e.target.value.length === 5) {
            setIsvalid("text-success")
        } else {

            setIsvalid("text-danger")
        }
    }
    function handlepasschange(e) {
        setPassword(e.target.value);
        if (password === 'password1') {
            setIsvalidpass("text-success")
        } else {
            setIsvalidpass('text-danger')


        }
    }
    function submitform() {
        if (password === "password") {
            setPassword("")
            setCookie("username", username);
            Navigate("/home");

        } else {
            alert("please enter valid password")

        }
        
        

    }
    function onclose() {
        if (Login === true) {
          setLogin(false);
          Navigate("/")
        }
      }
    // function Logoutclick(){
    //     if (password==true){
    //         setCookie('username');
    //         Navigate("/login");

    //         }else{
    //         setCookie('');    
    //     }
    // }
    return (
        <>


            <div className='container fixed-top'>
                <Modal isOpen={Login} className="W-25">
                    <form onSubmit={submitform}>
                        <div className="col-12 col-md-4 col-sm-6 modal-xl">

                            <h2>Login User</h2>
                            <dl>
                                <dt>User name</dt>
                                <dd><input type="text" onChange={handlenamechange} /></dd>
                                <dd className={Isvalid}>try Another</dd>
                                <dt>Password</dt>
                                <dd><input type="password" onChange={handlepasschange} /></dd>
                                <dd className={Isvalidpass}>invalid password</dd>
                            </dl>
                            <button className='btn btn-info'>Login</button>
                            <button className="btn btn-danger" onClick={onclose}>close</button>
                        </div>

                    </form>
                </Modal>
                 
            </div>
        </>

    )
}