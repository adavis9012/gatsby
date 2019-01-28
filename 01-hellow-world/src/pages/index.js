import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

export default () => (
  <div>
    <Link to="/about">About</Link>
    <Header headerText="Ola ke ase" />
    <p>Hello world!</p>
  </div>
);
