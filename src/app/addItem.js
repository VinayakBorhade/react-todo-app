var React=require("react");
var createReactClass = require('create-react-class');
require("./css/addItem.css");

var AddItem=createReactClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" ref="newItem" required />
                <input type="submit" value="hit me" />
            </form>
        );
    },
    handleSubmit: function(event){
        event.preventDefault();     // stops the default behaviour of the submit event i.e. page reloading
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports=AddItem;