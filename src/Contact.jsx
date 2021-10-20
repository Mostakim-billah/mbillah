import React , { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { NavLink } from "react-router-dom";
const Contact = () => {
    const [Data, setData] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        massage:'',

    })
    const InputTExt = (e) => {
        const {name,value} = e.target;
        console.log(Data);
        setData((event)=>{
            return{
                ...event,
                [name]:value,
            }
        })
    }
    const submit =(e) => {
        e.preventDefault();
        alert(`
        My name is ${Data.fname} ${Data.lname}. 
        My Email address is '${Data.email}' and Phone number is ${Data.phone}. 
        I can say that ${Data.massage}.`)
    }
    return(
    <>
        <div className="container-fluid pt-5 mt-5">
        <h1 className="text-center my-5 protfulio__title">Cont<span>act me</span></h1>
          <div className="row">
            <div className="col-md-7 col-11 mx-auto mb-5 text____contact">
                <form onSubmit = {submit}>
                <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                    <AccountCircleIcon className="Icon_contact" /> Frist <span>Name</span>
                </label>
                <input 
                    type="text" 
                    autoComplete="off" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name = "fname"
                    value = {Data.fname}
                    onChange = {InputTExt}
                    placeholder="Frist name"
                />
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                    <AccountCircleIcon className="Icon_contact" /> Last <span>Name</span>
                </label>
                <input 
                    type="text" 
                    autoComplete="off" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name = "lname"
                    value = {Data.lname}
                    onChange = {InputTExt}
                    placeholder="Last name"
                />
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                    <EmailIcon className="Icon_contact" /> Email <span>address</span>
                </label>
                <input 
                    type="email" 
                    autoComplete="off" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name = "email"
                    value = {Data.email}
                    onChange = {InputTExt}
                    placeholder="Enter email address"
                />
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">
                    <LocalPhoneIcon className="Icon_contact" /> Phone <span>Number</span>
                </label>
                <input 
                    type="number" 
                    autoComplete="off" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name = "phone"
                    value = {Data.phone}
                    onChange = {InputTExt}
                    placeholder="Enter phone number"
                />
            </div>
            <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">
                    <ChatBubbleIcon className="Icon_contact" /> Comment <span>Box</span>
                </label>
                <textarea 
                    class="form-control mb-4" 
                    name = "massage"
                    value = {Data.massage}
                    onChange = {InputTExt}
                    placeholder="Comment here..." 
                    id="exampleFormControlTextarea1" 
                    rows="4">
                </textarea>
            </div>
            <button className="home__btn submit___" > Submit </button>
                </form>
            </div>
          </div>   
        </div>
          
    </>
    )
}
export default Contact;