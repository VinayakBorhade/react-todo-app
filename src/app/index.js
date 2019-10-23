var React=require("react");
var ReactDOM=require("react-dom");
var createReactClass = require('create-react-class');

// create component
var TodoComponent =createReactClass({       //extends React.Component{
    getInitialState: function(){
        return{
            todos: ["task1", "task2", "task3"],
            age: 30
        };
    },
    render: function(){
        // let component=this;
        var age=setTimeout(
            function(){
                this.setState({
                    age: 35
                });
            }.bind(this),
            5000
        );
        return(
            <div>
                <p>Your Cheese</p>
                {this.props.cheese.name} - 
                {this.props.cheese.price} -
                {this.props.cheese.quantity}
                <p>age: {this.state.age}</p>
                <ul id="todo-list">
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
} );

var myCheese={name: "good cheese", price: "1.01", quantity: 15};

// put the component into html page
ReactDOM.render(
    <TodoComponent cheese={myCheese} />,
    document.getElementById("todo-wrapper")
);