import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Work <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Software Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>MWG</h2>
              <Typography variant="body2" color="inherit" component="p">
              - Participated in developing and maintaining system CRM (ASP.NET MVC and HTML/CSS/Javascript) <br/>
              - Database manipulation storage using Oracle Fuction,StoreProcedure,...<br/>
              - Analyzed project requirement from Product Manager and Business Analyst<br/>
              - Participated in optimizing, refactoring code<br/>
              - Participated in deploying, logging and monitoring web application using IIS<br/>
              (Windows OS),CICD,Gitlab.
              - Participated in supporting system CRM for online sales service and customer care
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>May 2021</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Backend Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>MWG</h2>
              <Typography variant="body2" color="inherit">
              - Planned, designed structure, programmed, built, developed and
deployed backend Customer Information Management(hundreds of millions of records) storage as EAV model core using Java Restful API,gradle spring boot database Posgresql,applied many design patterns such as: CQRS Pattern,
Api Gateway,Graphdb,Elatisearch and caching using Memcached / Redis Cache, Hazelcast cache. <br/>
- Maintain and deployed application Netcore using nginx,docker and Java using tomcat,docker,k8s,CICD gitlab-runner,...<br/>
- Monitoring web application using IIS
(Windows OS) and Linux (nginx, ansible,...) monitoring using prometheus,grafana and deploying using CICD ,Gitlab.<br/>
- Planned, designed structure, programmed, built, developed and
deployed backend for suggest commonly used payment method for customers using Java maven spring, CDC,apache Kafka,apache Flink.<br/>
- Developing, maintaining website for CRM structure, architecture (ASP.NET Core/Framework). <b> MWG</b>.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>Feb 2019</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Senior Software Engineer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>MWG</h2>
              <Typography variant="body2" color="inherit" component="p">
              - Building a backend product inventory calculation,purchase history using NET core 6 .<br/>
- Participated in analyzing, developing, maintaining Caching system using inmemory cache and distributed cache such as Memcached,Redis,Hazelcast<br/>
- Planned, designed structure, programmed, built, developed and
deployed backend for customer communication management (CCM) Using Net core 5,Hazelcast Queue,failover channel (sms,zalo,messenger,notify app),webhook,callback url and Restful API.<br/>
- Planned, designed structure, programmed, built, developed and
deployed backend
Restful API with .NET Core WebApi and Client-side Rendering with Reactjs
Implemented the new form survey in all website of company
using .Net 6.<br/>
- Shared knowledge about Technical, Developing Culture, Design Pattern,
etc... to members
              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2019 -</span>
              <span>Present</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
