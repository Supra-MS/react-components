/***********************************
Create and render a React component
***********************************/

/* let GroceryList = () => (
  <h3>List of Grocery Items</h3>
  <ul>
    <li>Turmeric</li>
    <li>Milk</li>
    <li>Sugar</li>
    <li>Wheat</li>
  </ul>
);

ReactDOM.render( <GroceryList />, document.getElementById('app')); */

/***************************************
Create and render nested React component
****************************************/

/* let GroceryList = () => (
  <div>
    <GroceryTitle />
    <GroceryItems />
  </div>
);

let GroceryTitle = () => (
  <h3>List of Grocery Items</h3>
);

let GroceryItems = () => (
  <ul>
    <Turmeric />
    <Milk />
    <Sugar />
    <Wheat />
  </ul>
);


let Turmeric = () => (
  <li>Turmeric</li>
);

let Milk = () => (
  <li>Milk</li>
);

let Sugar = () => (
  <li>Sugar</li>
);

let Wheat = () => (
  <li>Wheat</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app') ); */

/***********************************
Create and render a React component
***********************************/

/* let GroceryList = () => (
  <div>
    <GroceryTitle />
    <GroceryItems groceryListItems={groceryListItems} />
  </div>
);

let GroceryTitle = () => (
  <h3>List of Grocery Items</h3>
);

let groceryListItems = ['Turmeric', 'Milk', 'Sugar', 'Wheat'];

let GroceryItems = (props) => (
  <ul>
    <li>{props.groceryListItems[0]}</li>
    <li>{props.groceryListItems[1]}</li>
    <li>{props.groceryListItems[2]}</li>
    <li>{props.groceryListItems[3]}</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app')); */

/**********************
Handling User Events
**********************/

/* let GroceryList = () => (
  <div>
    <GroceryTitle />
    <GroceryItems groceryListItems={groceryListItems} />
  </div>
);

let GroceryTitle = () => (
  <h3>List of Grocery Items</h3>
);



let groceryListItems = ['Turmeric', 'Milk', 'Sugar', 'Wheat'];

let GroceryItems = (props) => {

  let onListItemClick = (event) => {
    let bgColors = ['darkorchid', 'darkgreen', 'purple'];
    let bgIndex = Math.floor(Math.random() * bgColors.length);

    let colors = ['white', 'darkgrey', 'yellow'];
    let index = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = bgColors[bgIndex];
    document.body.style.color = colors[index];
  };


return (
    <ul>
      <li onClick={onListItemClick}>{props.groceryListItems[0]}</li>
      <li onClick={onListItemClick}>{props.groceryListItems[1]}</li>
      <li onClick={onListItemClick}>{props.groceryListItems[2]}</li>
      <li onClick={onListItemClick}>{props.groceryListItems[3]}</li>
    </ul>
  );
};

ReactDOM.render(<GroceryList />, document.getElementById('app')); */

/*******************************************
Making applications interactive with state
*******************************************/

class GroceryItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };
  }

  onItemClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {

    let style = {
      textDecoration: this.state.isClicked ? 'line-through' : 'none',
      fontWeight: this.state.isClicked ? 'bold' : 'normal',
      color: this.state.isClicked ? 'darkGreen' : 'purple',
      fontSize: this.state.isClicked ? '27px' : '20px'
    };

    return (
      <li style={style} onClick={this.onItemClick.bind(this)}>{this.props.item}</li>
    );

  }

}

let myItems = ['Turmeric', 'Milk', 'Sugar', 'Wheat'];

let GroceryTitle = () => (
  <h3>List of Grocery Items</h3>
);

let GroceryListItems = (props) => (
  <ul>
    {props.myItems.map(item =>
        <GroceryItems item={item} key={item} />
      )
    }
  </ul>
);

let GroceryList = (props) => (
  <div>
    <GroceryTitle />
    <GroceryListItems myItems={myItems}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));