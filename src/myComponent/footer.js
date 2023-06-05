import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            display="inline"
          >
            <i class="far fa-copyright">
              Copyright Daohd. All Rights Reserved
            </i>
          </Typography>
        </div>
        <div className="footer-a">
          <a href="https://www.facebook.com/hoangdao.cr" target="_blank">
            <i class="fab fa-facebook-f " />
          </a>
          <a href="https://twitter.com/Daohd0412" target="_blank">
            <i class="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/cr.dao97/" target="_blank">
            <i class="fab fa-instagram" />
          </a>
          <a href="mailto: daohd0412@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
