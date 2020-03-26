import React, {Component} from 'react';
import profImg from '../images/profilepic.jpg'

class About extends Component {
    render() {

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profImg} alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>I was born in China, but raised in Gatineau (Quebec). I speak English, French, and Mandarin.
                            I have an interest in automation, AI, backend development, and data science. My passions are
                            playing violin, building small tools for everyday life, cooking, and gaming.</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Ding Ma</span><br/>
                                    <span>
						         Montreal, Quebec
                   </span><br/>
                                    <span>438-522-3139</span><br/>
                                    <span>ding.ma@mail.mcgill.ca</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                       className="button">See PDF Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
