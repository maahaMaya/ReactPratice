const element = React.createElement(
    "div",
    {
        className : "container",
        align : "center"
    },
    "Welcome to React.JS"
);
ReactDOM.render(
    element,
    document.getElementById("container")
)
