import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
      //  Please use your own credentials from emailjs or i will recive your email
      
    emailjs
      .sendForm(
        "service_niilndo",
        "template_6z5idye",
        form.current,
        "VOBt6Akm1LhI5CZG-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for Contacting me"}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact