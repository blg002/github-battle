var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Hello {this.props.name}!
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<App name="Foo Bar" />,
// 	document.getElementById('app')
// )

function findFriends(arr){
	return arr.filter(item => item.friend === true)
}

function findNonFriends(arr){
  return arr.filter(item => item.friend === false)
}

function getFriendData(arr) {
  return {
    friends: findFriends(arr),
    nonFriends: findNonFriends(arr)
  }
}

class Users extends React.Component {
  render() {
  	const friends = getFriendData(this.props.list).friends;
  	const nonFriends = getFriendData(this.props.list).nonFriends;

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(user => {
          	return <li key={user.name}>{user.name}</li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {nonFriends.map(user => {
          	return <li key={user.name}>{user.name}</li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);
