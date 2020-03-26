import React, {Component} from 'react';
import aide from "../images/AIDE.jpg"
import ecse223 from "../images/ecse223.png"

class Portfolio extends Component {
    render() {

        var projects = [
            {
                "title": "AIDE - GUI tool",
                "category": "Built during my S19 intern",
                "image": aide,
                "url": "https://github.com/ding-ma/Projet-tude-de-cas-en-Qualit-de-l-air"
            },
            {
                "title": "Brick Breaker",
                "category": "Class project: model-based programming",
                "image": ecse223,
                "url": "https://github.com/ding-ma/ECSE-223-Brick-Breaker"
            }
        ].map(function (project) {
            return <div key={project.title} className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={project.url} title={project.title}>
                        <img alt={project.title} src={project.image} className="portfolio-image"/>
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{project.title}</h5>
                                <p>{project.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa fa-link"/></div>
                    </a>
                </div>
            </div>
        });

        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of My Works.</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
