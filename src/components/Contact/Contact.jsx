import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
    const [user, setUser] = useState(
        {
          name: '',
          email: '',
          subject: '',
          message: ''  
        }
    )

    let values, names; 
    const data = (e)=> {
        values = e.target.value;
        names = e.target.name;
        setUser({...user, [names]: values})
    }

    //============= post info to firebase database ===================>
    const send = async (e)=> {
        const {name, email, subject, message} = user;
        e.preventDefault()

            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, email, subject, message
                })
            }
            const response = await fetch('https://e-commerce-user-contact-default-rtdb.firebaseio.com/message.json', option)
            if(response && name !== '' && email !== ''){
                alert('Your message has been sent!')
                // reset input after clicking!
                setUser({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''  
                  })
            } else {
                alert('Error Occured Message Sent Failed!')
            }
    }
    //============= post info to firebase database finished ============>

    return (
        <>
            <div className="contact">
                <div className="container">
                    <h2>#contact</h2>
                    <div className="form">
                        <form method='POST'>
                            <div className="box">
                                <div className="lable">
                                    <h4>Name</h4>
                                </div>
                                <div className="input">
                                    <input required type="text" placeholder='Name' value={user.name} name='name' onChange={data} />
                                </div>
                            </div>
                            <div className="box">
                                <div className="lable">
                                    <h4>E-mail</h4>
                                </div>
                                <div className="input">
                                    <input required type="email" placeholder='E-mail' value={user.email} name='email' onChange={data}/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="lable">
                                    <h4>Subject</h4>
                                </div>
                                <div className="input">
                                    <input required type="text" placeholder='Subject' value={user.subject} name='subject' onChange={data}/>
                                </div>
                            </div>
                            <div className="box">
                                <div className="lable">
                                    <h4>Message</h4>
                                </div>
                                <div className="input">
                                    <textarea required name="message" placeholder='Message' value={user.message} cols="30"  onChange={data}></textarea>
                                </div>
                            </div>
                            <button type='submit' onClick={send}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
