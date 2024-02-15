




const Parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1" },[
        React.createElement("h1",{},"I am H1 of child1"),React.createElement("h2",{},"I am H2 of child1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am H1 of child2"),React.createElement("h2",{},"I am H2 of child2")
    ]),
    React.createElement("div",{id:"child3"},[
        React.createElement("h1",{},"I am H1 of child3"),React.createElement("h2",{},"I am H2 of child3")
    ])
])







// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);