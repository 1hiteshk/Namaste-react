import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(0);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>count : {count}</h1>
            <h1>count : {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: jaipur </h3>
            <h4>contact: @1hparihar</h4>
        </div>
    );
};

export default User;