import React, {Component} from 'react';
import Typed from 'react-typed';

class Header extends Component {
    render() {

        const networks = [
            {
                "name": "linkedin",
                "url": "https://www.linkedin.com/in/ding--ma/",
                "className": "fa fa-linkedin-square"
            },
            {
                "name": "github",
                "url": "https://github.com/ding-ma",
                "className": "fa fa-github"
            }
        ].map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}/></a>
            </li>
        });

        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            <Typed
                                strings={[
                                    'Hi, I\'m',
                                    'Bonjour, je suis',
                                    '你好, 我是'
                                ]}
                                typeSpeed={80}
                                backSpeed={50}
                                showCursor={false}
                                loop
                            /> Ding<span className="yellowText">.</span></h1>
                        <hr/>
                        <h3>I'm currently a third year software engineering student at McGill University located
                            in the <i>belle province</i> of Québec.</h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                </p>

            </header>
        );
    }
}

export default Header;
