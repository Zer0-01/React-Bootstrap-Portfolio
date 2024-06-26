import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import '../style.css';
import anasImage from "../assets/anas.png"; // Import the image file


const About = () => {
    return (
        <section id="about" className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="section-title">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        About Me
                    </h2>
                    <div className="profile-image-container">
                    <img src={anasImage}
                            alt="geek pic"
                            className="img-fluid rounded-circle profile-image" /> 
                    </div>
                    <p className="section-description mt-4">
                        I am a Bachelor of Computer Science (Multimedia) with Honours student from UPM, currently gaining practical experience as an intern in mobile development. I have hands-on experience with mobile development languages such as Dart and Swift. Additionally, I am proficient in mobile development frameworks including Flutter and SwiftUI.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;