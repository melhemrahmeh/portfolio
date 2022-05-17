import React, { useState, useEffect } from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        const values = {
            name: name,
            email: email,
            message: message
        };
        e.preventDefault();
        emailjs.send("service_5lbrexw", "template_iv5pb2p", values, "SpHCRXL1ap7PX2DXj")
            .then(response => {
                console.log('SUCCESS!', response);
            }, error => {
                console.log('FAILED...', error);
            });
    }

    const notify = () => toast.success("Message Sent to Melhem Rahmeh!");

    return (
        <Section id="contact">
            <br />
            <SectionTitle>Contact Me</SectionTitle>
            <SectionText>
                <div>
                    Interested in working together?<br />
                    Or perhaps you would just like to connect? So kindly leave a message bellow. <br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <form>
                        <div class="form-group">
                            <label for="pwd">Name:</label>
                            <input
                                type="text"
                                class="form-control"
                                id="pwd"
                                placeholder="Enter your Name:"
                                name="name"
                                style={{ fontSize: "23px", width: "370px", height: "35px" }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div><br /></div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                style={{ fontSize: "23px", width: "370px", height: "35px" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div><br /></div>
                        <div class="form-group">
                            <label for="pwd">Message:</label>
                            <textarea
                                name=""
                                id=""
                                class="form-control"
                                cols="30"
                                rows="10"
                                style={{ fontSize: "23px", width: "370px", height: "150px" }}
                                placeholder="Feel Free to Enter Your Message!"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}

                            ></textarea>
                        </div>
                        <br />
                        <div class="d-flex justify-content-center">
                            <button className="btn btn-light"
                                style={{ fontSize: "23px", width: "100px", height: "45px", margin: "auto" }}
                                onClick={(e) => { notify(), handleSubmit(e) }}>
                                <b>Send</b>
                            </button>
                        </div>
                    </form>
                    <ToastContainer
                        autoClose={4000}
                        hideProgressBar={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </SectionText>
        </Section>
    )
};

export default Contact;