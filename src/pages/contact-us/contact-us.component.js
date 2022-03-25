import React, { Component, useState } from "react";

//style
import './contact-us.style.css'


function ContactUs({local_vocab, user_info}) {
    const [form_data, setFormData] = useState({
        name: Object.keys(user_info).length !== 0 && user_info.name !== undefined ? user_info.name : "",
        email: Object.keys(user_info).length !== 0 && user_info.email !== undefined ? user_info.email : "",
        phonenumber: "",
        country_code: "",
        text: ""
    });
    
    const countryList = [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" }
    ];

    const [countries , setCountries] = useState(countryList);
    const [show_countries , setShowCountries] =useState(false);
    const [selected_country , setSelectedCountry] = useState({id:"", name:""});
    const [search_string , setSearchString] = useState("");
    const [is_email_valid , setIsEmailValid] = useState(false);
    const[is_phone_valid , setIsPhoneValid] = useState(false);
    const country_list_classes = show_countries ?  "contry-list dd-flex" : "contry-list dd-hidden";
    const email_classes =  is_email_valid ? "c-controller-field" : "c-controller-field not-valid"
    const phone_classes =  is_email_valid ? "c-controller-field" : "c-controller-field not-valid"
 
    const setName = (e) => {
        setFormData({
            ...form_data,
            name:e.target.value
        })
    }

    const setEmail = (e) => {
        setIsEmailValid(validateEmail(e.target.value));
        setFormData({
            ...form_data,
            email:e.target.value
        })
    }

    const setPhone = (e) => {
        setIsPhoneValid(validatePhone(e.target.value))
        setFormData({
            ...form_data,
            phonenumber:e.target.value
        })
    }

    const searchCountry = (e) => {
       e.preventDefault();
        let new_contries 
        if(e.target.value !== ""){
            new_contries = countryList.filter((country, i)=> local_vocab[country.name].toLowerCase().startsWith(e.target.value.toLowerCase()));
        }else{
            new_contries = countryList;
        }
        
        setSearchString(e.target.value);
        setCountries(new_contries);
        setSelectedCountry({id:"", name:""})
    }

    const setCountryCode = (country) => {
        
        setSelectedCountry(country)
        setShowCountries(false);
        setFormData({
            ...form_data,
            country_code:country.id
        })
 
    }

    const setText = (e) => {
        setFormData({
            ...form_data,
            text:e.target.value
        })
    }

    const validateEmail = (email) => {
        return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          .test( String(email)
          .toLowerCase())
    };

    
    const validatePhone = (Phone) => {
        return  /^[0-9]{10,11}$/
          .test(Phone)
    };
    const sendMessage = (e) => {
       
        console.log(form_data)
    }
    let country_name = selected_country.name !== "" ? local_vocab[selected_country.name] :search_string;
    return (
        <div className="contact-us-container" >
            <h6 className="contact-title">{local_vocab.contact_page_title}</h6>

            <div className="contact-form">
                <div className="c-form-conroller">
                    <span className="c-controller-name">{local_vocab.name}</span>
                    <input placeholder={local_vocab.name_please} className="c-controller-field" type="text"  onChange={(e)=>{setName(e)}} value={form_data.name}/>
                </div>

                <div className="c-form-conroller">
                    <span className="c-controller-name">{local_vocab.email}</span>
                    <input placeholder={local_vocab.mail_please} className={email_classes} type="text"  onChange={(e)=>{setEmail(e)}} value={form_data.email}/>
                </div>

                <div className="c-form-conroller">
                    <span className="c-controller-name">{local_vocab.phone}</span>
                    <input  placeholder={local_vocab.phone_please} className={phone_classes} type="text"  onChange={(e)=>{setPhone(e)}} />
                </div>

                <div className="c-form-conroller country-fomrm-controller">
                    <span className="c-controller-name">{local_vocab.country}</span>
                    <input  placeholder={local_vocab.country_please} className="c-controller-field" type="text" onClick={()=>setShowCountries(!show_countries)}  onChange={(e)=>{searchCountry(e)}} value={country_name}/>

                    <div className={country_list_classes} >
                        {countries.map(function(country, index){
                            return <button className="country" onClick={()=>{setCountryCode( country )}} key={ country.id } >{local_vocab[country.name]}</button>;
                        })}
                    </div>
                </div>

                <div className="c-form-conroller">
                    <span className="c-controller-name">{local_vocab.text}</span>
                    <textarea  placeholder={local_vocab.message_please} rows={5} className="c-controller-field"  onChange={(e)=>{setText(e)}}></textarea>
                </div>

                <button className="send-button" onClick={()=>{sendMessage()}} >{local_vocab.send}</button>
            </div>

        </div>
    );

}

export default ContactUs;