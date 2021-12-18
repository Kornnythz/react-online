import React from 'react'
import { Card , Button  } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
const ContactusPage = () => {
    return (
        <div className="container mt-5 mb-5">
            <Card>
            <Card.Header>Contact Us</Card.Header>
            
            <Card.Body>
                <Card.Title><h4>Vatcharakon Kalapakdee</h4></Card.Title>
                <Card.Text>
                    I'm Korn 👋 I'm from Thailand. Nice to meet you.
                    <ul className="mt-2">
                        <li>📚 I'm currently studying for a bachelor's degree at Thai-Nichi Institue of Technology [TNI]</li>
                        <li>🎓 I'm going to graduate in 2-3 months !! 🎉</li>
                        <li>💻 My currently faculty : Information Technology [IT-TNI]</li>
                        <li>🧑‍💻 I’m interested to try and learn everything about coding </li>
                        <li>🌟 Free time : I love playing game so much like ROX (Mobile), Ragnarok Online (PC), and strategy game 🎮</li>
                        <li>✨ I’m a newbie for everything and still learning everything that I could learn.</li>
                        <li>🖥️ When I graduate I'm going to look for a job about dev code backend (java , php , node.js , mysql) </li>
                        <li>🎒 I'm planning to study in a master's degree in Chulalongkorn University [CU] faculty : Computer Science [CS]</li>
                    </ul>
                    <p>My GitHub Link below</p>
                    <Button href="https://github.com/Kornnythz" variant="outline-info" ><BsGithub/> Click Here!</Button>
                    <div className="mt-3"><strong>Contact Me : </strong> ka.vatcharakon_st@tni.ac.th</div>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ContactusPage
