import React from "react";
import ReactDOM  from "react-dom/client";

// JSX (transpiled it before reaches the JS) - parcel - Babel

// jsx => React.createElement => ReactElement js-object => HTMLElement(render)

const elem = <span>React element</span>
const Title = () => (
    <>
    {elem}
    <h1 className="head" tabIndex={5}>namaste react using jsx🚀</h1>
    </>
)

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste react functional components</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent />);