import React, {Component} from 'react';

class Resume extends Component {
    render() {

        const works = [
            {
                "company": "Desjardins",
                "title": "Solutions Developer Intern",
                "location": "Montréal, Canada",
                "years": "May 2020 - August 2020",
                "description": "Currently developing an internal crypto currency based on Blockchain."
            },
            {
                "company": "Environment and Climate Change Canada",
                "title": "Data Analyst Intern",
                "location": "Montréal, Canada",
                "years": "May 2019 - August 2019",
                "description": "Built data extraction tool and analysed data for meteorologists."
            }
        ].map(function (work) {

            return (<div key={work.title}><h3>{work.title}</h3>
                <p className="info">{work.company}<br/><em className="date">{work.location}</em><br/>
                    <em className="date">{work.years}</em></p>

                <p>{work.description}</p>
            </div>)
        });

        const skills = [
            "Python (Pandas, openCV, NumPy, Matplotlib, Selenium)",
            "Git",
            "Java (Spring Framework)",
            "Heroku",
            "Postgres",
            "Assembly - ARM",
            "C",
            "Bash",
            "UNIX",
            "Cloud Services (GCP)",
            "JavaScript (React, Puppeteer)"
        ].sort().map(function (skill) {
            return <ul>{skill}</ul>
        });

        const education = [{
            "school": "McGill University",
            "degree": "Software Engineering (B.Eng)",
            "graduated": "September 2018 - Present",
            "description": [
                "Involved in McGill Robotics design club.",
                "Tutoring at CSUS HelpDesk"
            ]
        },
            {
                "school": "Heritage College",
                "degree": "General DEC - Science",
                "graduated": "September 2016 - May 2018",
                "description": [
                    "Graduated with honors"
                ]
            }].map(function (education) {
            function renderList(d) {
                const items = d.map((a) => <li>{a}</li>);
                return <div>
                    {items}
                </div>
            }

            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em
                    className="date">{education.graduated}</em></p>
                {renderList(education.description)}
                &nbsp;
            </div>
        });

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {works}
                    </div>
                </div>


                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>Here are some technologies that I have worked with</p>
                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
