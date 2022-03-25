import Modal from "react-modal";
import { useState } from "react";
import DropDownLocal from "../../shared/drop-down-local/drop-down-local.component";
import {AiOutlineCloseSquare} from 'react-icons/ai'

//styles
import './login.style.css'

function Login({modalIsOpen , closeModal, updateLocal, local_vocab, local , login }){
    const [user_data, setUserData] = useState({
        name:"",
        email:"",
        password:""
    });

    const modalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'rgb(151 136 221)'
        },
    };

    const setName = (e) => {
        setUserData({
            ...user_data,
            name:e.target.value
        })
    }

    
    const setMail = (e) => {
        setUserData({
            ...user_data,
            email:e.target.value
        })
    }

    
    const setPassword = (e) => {
        setUserData({
            ...user_data,
            password:e.target.value
        })
    }

    const logUserIn = (e) => {
        e.preventDefault();
        console.log(user_data);
        login(user_data)
        closeModal();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={false} 
        >
            <div className="modal-head">
                <div className="title-dd-container">
                    <h5 className="login-title">{local_vocab.Login}</h5>
                    <DropDownLocal local={local} updateLocal={updateLocal} local_vocab={local_vocab}/>
                </div>
                
                <AiOutlineCloseSquare 
                className="close-modal" 
                color="red" 
                size={25} 
                onClick={closeModal}/>
            </div>
            
            <form>
                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.name}</span>
                    <input  placeholder={local_vocab.name_please} className="controller-field" type="text"  onChange={(e)=>{setName(e)}}/>
                </div>
               
                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.email}</span>
                    <input  placeholder={local_vocab.mail_please} className="controller-field" type="text"  onChange={(e)=>{setMail(e)}} />
                </div>

                <div className="form-conroller">
                    <span className="controller-name">{local_vocab.password}</span>
                    <input className="controller-field" type="password" onChange={(e)=>{setPassword(e)}} />
                </div>

                <button className="login-btn" onClick={logUserIn}>{local_vocab.Login}</button>
            </form>
        </Modal>
    )
}

export default Login;