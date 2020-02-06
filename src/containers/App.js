import React, {Component} from 'react';
import '../containers/App.css';
import Persons from '../components/Persons/Persons';  
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }


  state = {
    persons: [
       { id: 'ars8Kgx4T8dL7KM', name: 'Evtim', age: 21},
       { id: 'xSbPDv7nIIRkUai', name: 'Burov', age: 20},
       { id: '2SASDv4nRuRkU2y', name: 'Stephanie', age: 26}
    ],
    otherState: 'test',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props); 
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
   

   togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
   }

   render() {
    console.log('[App.js] render');
    let persons = null;
   
    if (this.state.showPersons) {
      persons = (
        <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} />
      );
    }
    return (
      <div className="App">
      <Cockpit
      title={this.props.appTitle}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler} />
      {persons}
      </div>
   ); 
     
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
 }
 
export default App;

