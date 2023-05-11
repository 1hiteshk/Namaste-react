import React from "react";
import ReactDOM  from "react-dom/client";

// JSX (transpiled it before reaches the JS) - parcel - Babel

// jsx => React.createElement => ReactElement js-object => HTMLElement(render)

const jsxHeading = <h1 className="head">namaste react using jsx 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);