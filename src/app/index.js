var React=require("react");
var ReactDOM=require("react-dom");
var createReactClass = require('create-react-class');
require("./css/index.css");
import { browserhistory, BrowserRouter as Router, Route, Link } from 'react-router-dom';

// below are the modules required...
var TodoItem=require("./todoItem");
var AddItem=require("./addItem");
var About=require("./about");

var App=createReactClass({
    render: function(){
        return (
            <Router history={browserhistory} >
                <Route exact path={"/"} component={TodoComponent} ></Route>
                <Route path={"/about"} component={About} ></Route>
            </Router>
        );
    }
});

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
                <Link to={"/about"}>About</Link>
                <p>Click me!!</p>
                <p>age: {this.state.age}</p>
                <ul> {todos} </ul>
                <AddItem onAdd={this.onAdd} />
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
    },
    onAdd:function(item){
        var updatedTodos=this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    }
});

// put the component into html page
ReactDOM.render(
    <App />,
    document.getElementById("todo-wrapper")
);