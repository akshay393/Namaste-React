import React from 'react';
import ReactDOM from 'react-dom/client';

/*
const heading1 = document.createElement("h1");
heading1.innerHTML = "Heading 1";

const heading2 = document.createElement("h1");
heading2.innerHTML = "Heading 2";

const root = document.getElementById("root");
root.appendChild(heading1);
root.appendChild(heading2);
*/

// Using React.createElement
/*const heading1 = React.createElement("h1",{key:"1"},"Heading 1");
const heading2 = React.createElement("h1",{key:"2"},"Heading 2");

const container = React.createElement("div",{id : 'container'},[heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);*/

// Using JSX
const titleElement = (
    <h1 id='title'key="1">
      Title Element
    </h1>
)

const TitleComponent = ()=> {
    return (
        <h1>Title Component</h1>
    )
}

const HeaderComponent = ()=> {
    return (
        <div>
            {titleElement}
            {1+2}
            {console.log('functional component')}
            {/* {TitleComponent()}     */}
            <TitleComponent />
            <h1>Component 1</h1>
            <h2>Component 2</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />)