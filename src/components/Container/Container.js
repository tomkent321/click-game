import React from "react";
// import "./Wrapper.css";
import "./Container.css";

//stateless component
// const Wrapper = props => <div className="wrapper">{props.children}</div>;
const Container = props => <div className="container-fluid">{props.children}</div>;

// export default Wrapper;
export default Container;