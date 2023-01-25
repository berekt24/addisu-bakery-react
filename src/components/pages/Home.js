import React from 'react';
import '../Header.css';
import headshot from '../Assets/addisu-bakery-logo.png'

export default function Home() {
    return (
        <div>
            <img className="col-2" id="img" src={headshot} alt="Berekt Ashenafi"></img>
            <h1 class="home-header">Welcome to my Portfolio!</h1>

            <h5 class="desc-home">
                Hello, my name is Berekt Ashenafi and I am a Full-stack Web Developer with a passion for creating apps and contributing to the future of technology.
            </h5>
            <h4 class="desc-home">
                Some of the skills I have include:
            </h4>
            <ul class="skills-list">
                <li class="skills-row-1">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        React JS
                    </li>
                    <li>
                        Node JS
                    </li>
                </li>
                <li class="skills-row-2">
                    <li>
                        MongoDB
                    </li>
                    <li>
                        SQL
                    </li>

                    <li>
                        Web APIs
                    </li>
                    <li>
                        NoSQL
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        Github
                    </li>
                    <li>
                        Slack
                    </li>
                </li>
            </ul>
        </div>

    );
}