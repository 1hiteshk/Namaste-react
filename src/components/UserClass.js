import React from "react";

class Userclass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            // count: 1,
            // count2:2,
            // count3:0,
            userInfo:{
                name: "dummy",
                location: "default",
                
            },
        };
       // console.log("child constructuor");
    }

   async componentDidMount() {
      //  console.log(this.props.name + "child compononent did mount");
      const data = await fetch(" https://api.github.com/users/akshaymarch7");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });

      console.log(json);  
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        // const {name,location} = this.props;
        // const {count,count2} = this.state;

        const {name, location,avatar_url} = this.state.userInfo;
       // console.log("child render");

       return(
        <div className="user-card">
            {/* <h1>count : {this.state.count} | {count2}</h1>
            <button onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 2,
              })
            }}>Count Increase </button> */}

            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>location : {location}</h3>
            <h4>contact: @1hparihar</h4>
        </div>
       );
    }
}
export default Userclass;