import React from "react";

import { Paper, Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";

AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Me</h1>
          <p data-aos="fade-up" className="about_p">
            Hi! I am dao <br />
            - I have 4 years experience on back end .Net C#
            (Core,Framework),Java Restful API ,Spring boot, Gradle, Maven and
            Fronend AngularJs,ReactJs...
            <br />
            - Database Oracle,SQL server, PosgresQL.
            <br />
            - Experience API gateway,microservices,saga pattern.
            <br />
            - Experience streaming data using apache kafka,apache
            flink,ElasticSearch, caching IIS, Redis,Hazelcache,Memcached and
            message queue RabbitMQ.
            <br />
            - Good maintenance and devops,
            gitlab,CICD,Gitlab-runner,Docker,k8s,Jenkins
            <br />
            - With a passion to learn and cultivate new knowledge to develop
            myself.
            <br />
            Finally, I hope to be able to devote my passion to your work and
            learn new things to improve my skills.
          </p>

          <div className="row">
            <div>
              <p>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="HTML5"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-html5 fa-3x" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="CSS3"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-css3-alt fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVASCRIPT"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-js-square fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="REACTJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-react fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVA"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-java fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="C# .NET"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-windows fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="k8s,Docker"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-docker fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Git,Gitlab,Jenkins,gitlab-runner"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-git fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="ORACLE,POSTGRESQL,SQLSERVER-DATABASE"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fas fa-database fa-3x" aria-hidden="true" />
                </Tooltip>
              </p>
            </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
                  daohd0412@gmail.com
                </span>

                <span>
                  <i className="fas fa-mobile-alt" />
                  +84376795310
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> Thu Thiem Garden
                  apartment,HCM
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
