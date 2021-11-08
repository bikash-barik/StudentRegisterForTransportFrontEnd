import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyouimg from "../resources/Payment.gif";


class ThankYouMessage extends Component {
  render() {
    return (
      <div>
                <div className="h5 gofornext float-end">
          <a href="/">
            <img src="https://img.icons8.com/ios/30/3212ff/left--v1.png" />
            Back To Home
          </a>
        </div>
        <center>
          {/* <h2> You will get the affirmation message by SMS and Email Soon.</h2> */}
          <img src={thankyouimg} width="500" />
          {/* <Link
            to="/"
            style={{
              backgroundColor: "#6900cb",
              color: "white",
              padding: 5,
              paddingRight: 10,
              fontSize: 10
            }}
          >
            {" "}
            Go to Home{" "}
          </Link> */}
        </center>

      </div>
    );
  }
}

export default ThankYouMessage;