var React=require("react");
var ReactDOM=require("react-dom");

// create component
class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <p>Your Cheese</p>
                {this.props.cheese.name} - 
                {this.props.cheese.price} -
                {this.props.cheese.quantity}
            </div>
        );
    }
}

var myCheese={name: "good cheese", price: "1.01", quantity: 15};

// put the component into html page
ReactDOM.render(
    <TodoComponent cheese={myCheese} />,
    document.getElementById("todo-wrapper")
);