import { Component, type ReactNode } from "react";
import type ourState from "./interfaces";

class Footer extends Component {
  state: Readonly<ourState> = {
    firstName: "Marwan",
    lastName: "AbdalMagied",
    age: 23,
    address: "Cairo",
  };

  render(): ReactNode {
    return (
      <footer>
        firstName: {this.state.firstName}, lastName: {this.state.lastName}, age:
        {this.state.age}, address: {this.state.address}
      </footer>
    );
  }
}

export default Footer;
