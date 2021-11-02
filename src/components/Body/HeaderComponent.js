import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
            <a href="" class="navbar-brand">
              Student Registration For Transport
            </a>
            <form class="form-inline d-flex">
            <a
                class="btn btn-outline-primary my-2 my-sm-0 mr-4"
                type="submit"
                href="/"
              >
                Student
              </a>
              <a
                class="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
                href="/Students"
              >
                Admin
              </a>
            </form>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
