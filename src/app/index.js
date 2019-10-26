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
        let component=this;
        var age=setTimeout(
            function(){
                this.setState({
                    age: 35
                });
            }.bind(this),
            5000
        );
        var todos=this.state.todos;
        todos=todos.map(function(item, index){
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            );
        }.bind(this));
        return(
            <div id="todo-list">
                <p>Click me!!</p>
                <p>age: {this.state.age}</p>
                <ul> {todos} </ul>
            </div>
        );
    },
    // custom functions...
    onDelete: function(item){
        var updatedTodos=this.state.todos.filter(function(val, index){
            return item!==val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
});

// react component for todo-item
var TodoItem=createReactClass({
    render: function(){
        return (
        <li>
            <div className="todo-item">
                <span className="item-name">{this.props.item}</span>
                <span className="item-delete" onClick={this.handleDelete}> X</span>
            </div>
        </li>
        );
    },
    // custom functions...
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});


// put the component into html page
ReactDOM.render(
    <TodoComponent />,
    document.getElementById("todo-wrapper")
);