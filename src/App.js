import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button';
import Gen from './StringGenerator/gen';
class App extends Component {
  state = {
    persons: [
       { id: 'ars8Kgx4T8dL7KM', name: 'Evtim', age: 21},
       { id: 'xSbPDv7nIIRkUai', name: 'Burov', age: 20}
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
    }

    return (
      <div className="App">
      <h1>Hi, welcome to my website!</h1>
      <Button variant="outlined" onClick={this.togglePersonsHandler}>Show Info</Button>
      {persons}
       
   </div>
   ); 
     
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
 }
 
export default App;

