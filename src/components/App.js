import React from "react";
import PropTypes from "prop-types";
import { createRoot } from "react-dom/client";



const App = ({name, age}) => {

    // console.log(`hello
    // world
    // `);

    // const numbers = [1, 2, 3];
    // const [a, b, c] = numbers;

    // console.log(a);
    // console.log(b);
    // console.log(c);

    // console.log(props.age);

    // const person = {
    //     name: "Beer",
    //     age : 18
    // }

    // const {name, age} = person;

    // console.log(name);
    // console.log(age);

    return <h1> Hello {name} age {age} </h1>;
}


App.defaultProps = {
    name: "x",
    age: 0
}

App.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default App;