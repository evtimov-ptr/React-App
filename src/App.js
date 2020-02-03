import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Gen from './StringGenerator/gen';


class App extends Component {
  state = {
    persons: [
       { id: 'ars8Kgx4T8dL7KM', name: 'Evtim', age: 21},
       { id: 'xSbPDv7nIIRkUai', name: 'Burov', age: 20},
       { id: '2SASDv4nRuRkU2y', name: 'Stephanie', age: 26}
    ],
    otherState: 'test',
    showPersons: false
  };

   nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });

    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({ persons: persons });
   }

   deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //equivalent of the slice approach
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
   }
   
    genRand = () => {
     let _result = Gen(15);
     console.log(_result);
   }

   togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
   }
   render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
<div>  
  {this.state.persons.map((person, index) => {
    return <Person 
    click={() => this.deletePersonHandler(index)}
    name={person.name} 
    age={person.age}
    key={person.id}
    changed={(event) => this.nameChangedHandler(event, person.id)} />
  })}
   </div> 
      );

      style.backgroundColor = 'red';
  
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
   
      <div className="App">
      <h1>Hi, welcome to my website</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style}
       onClick={this.togglePersonsHandler}>Show Info</button>
      {persons}
      </div>
   
   ); 
     
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
 }
 
export default App;

