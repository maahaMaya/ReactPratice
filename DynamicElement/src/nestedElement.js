const element = React.createElement(
    "div",
    {
        className : "container",
        align : "center"
    },
    "Welcome to React.JS",
    React.createElement(
        "div",
        {
            align : "center"
        },
        "Nested Element",
        React.createElement(
            "div",
            null,
            "Nested Element"
        )
    )
);
ReactDOM.render(
    element,
    document.getElementById("container")
)
