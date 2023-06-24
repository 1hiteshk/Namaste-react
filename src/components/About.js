import User from "./User";
import Userclass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);

        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent compononent did mount");
    }

    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About</h1>
                <h2>this is namaste react web series</h2>
                {/* <User name={"Hitesh kumar"} /> */}
    
                <Userclass name={"Hitesh parihar class"} location={"jaipur"}/>
                {/* <Userclass name={"Ayush kumar class"} location={"kota"}/> */}
            </div>
        );
    }
}


export default About;