var React=require("react");
var ReactDOM=require("react-dom");

// create component
class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>hellooo!!</h1>
                <p>hey you! yes you!</p>
            </div>
        );
    }
}

// put the component into html page
ReactDOM.render(
    <TodoComponent />,
    document.getElementById("todo-wrapper")
);