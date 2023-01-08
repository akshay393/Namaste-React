/*
const heading1 = document.createElement("h1");
heading1.innerHTML = "Heading 1";

const heading2 = document.createElement("h1");
heading2.innerHTML = "Heading 2";

const root = document.getElementById("root");
root.appendChild(heading1);
root.appendChild(heading2);
*/

// Using React
const heading1 = React.createElement("h1",{},"Heading 1");
const heading2 = React.createElement("h1",{},"Heading 2");

const container = React.createElement("div",{id : 'container'},[heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);