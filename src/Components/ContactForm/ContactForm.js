import React, { useState } from "react";

import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from "react-bootstrap";

import "./ContactForm.css";
// import { AlertMessage } from "..";


const ContactForm = () => {
    // export default class ContactForm extends Component {
    const msgCollectionRef = collection(db, "messages");

    const [newEmail, setNewEmail] = useState("");
    const [newName, setNewName] = useState("");
    const [newMsg, setNewMsg] = useState("");
    const [formErrors, setFormErrors] = useState({email: "", name: "", message: ""});
    const [emailValid, setEmailValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);
    const [formValid, setFormValid] = useState(false);



    const createMessage = async () => {
        const timestamp = new Date().toString();
        const payload = {
            name: newName,
            email: newEmail,
            message: newMsg, 
            date:timestamp,
            modToken: process.env.REACT_APP_FIREBASE_MOD_TOKEN
        };
        // console.log(payload);
        await addDoc(msgCollectionRef, payload);
        alert("Your message has been submitted, thank you.");
        setNewEmail("");
        setNewName("");
        setNewMsg("");
        // AlertMessage();
    }
    // render() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formContactName">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        value={newName}
                        placeholder="Your Name"
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactEmail">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control
                        value={newEmail}
                        type="email"
                        placeholder="name@example.com"
                        onChange={(event) => {
                            setNewEmail(event.target.value);
                        }} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        value={newMsg}
                        as="textarea"
                        placeholder="Leave a message here"
                        style={{ height: '100px' }}
                        onChange={(event) => { setNewMsg(event.target.value) }}
                    />
                </FloatingLabel>
            </Form.Group>
            <Button size="lg" type="button" onClick={createMessage}>
                Submit
            </Button>
        </Form>
    );
    // }
}

export default ContactForm;