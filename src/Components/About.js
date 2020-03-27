import React, {Component} from 'react';
import profImg from '../images/profilepic.jpg'
import Modal from "react-responsive-modal";


class About extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;
        const inputBox = {width: 400, height: 45};
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profImg} alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>I was born in China and raised in Gatineau (Quebec). I speak English, French, and Mandarin.
                            I have an interest in automation, AI, backend development, and data science. My passions are
                            playing violin, building small tools for everyday life, cooking, and gaming.</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Ding Ma</span><br/>
                                    <span>
						         Montréal, Quebéc
                   </span><br/>
                                    <span>438-522-3139</span><br/>
                                    <span>ding.ma@mail.mcgill.ca</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                       className="button" target="_blank" rel="noopener noreferrer">See PDF Resume</a>
                                </p>


                                <div>
                                    <button onClick={this.onOpenModal} className="button">Contact Me</button>
                                    <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false}
                                           className="popup">
                                        <h2>Contact Me</h2>
                                        <form>

                                            <input type="text" name="name" placeholder="Your Name"
                                                   style={inputBox}/>
                                            <input type="text" name="email" placeholder="Your Email"
                                                   style={inputBox}/>
                                            <input type="text" name="subject" placeholder="Subject"
                                                   style={inputBox}/>

                                            <textarea name="text" placeholder="Write something" style={{width: 800}}/>

                                            <input type="submit" value="Submit"/>
                                        </form>
                                    </Modal>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
