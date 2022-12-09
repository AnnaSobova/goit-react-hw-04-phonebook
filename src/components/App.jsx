import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import Container from './container/Container';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';


class App extends Component{
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],

    filter: '',
  }

componentDidMount(){
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  if(parsedContacts){
    this.setState({contacts:parsedContacts});
  }
}
componentDidUpdate(prevProps, prevState){
  if(this.state.contacts !==prevState.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}


  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
   
  formSubmitHandle = data => {
    const id = nanoid();
    // if (
    //   this.state.contacts.filter(contact => contact.name === data.name).length >
    //   0
    // ) {
    //   alert(`${data.name} is already in contacts`);
    //   return;
    // }
      
    const isExist =this.state.contacts.find(contact => contact.name === data.name)
     if(isExist){
      alert(`${data.name} is already in contacts`);
        return;
     }

    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
          id: id,
        },
      ],
    });
  };


  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

render() {
  const normolizeFilter = this.state.filter.toLowerCase();
  const visibleContacts = this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );
return(
  <Container title="Phonebook">
     
     <Phonebook
          onChange={this.handleChange}
          onSubmit={this.formSubmitHandle}
          contactsList={visibleContacts}
          notEmptyList={this.state.contacts.length}
          valueFilter={this.state.filter}
        />
          {this.state.contacts.length > 0 ? (
          <Contacts
            name="Contacts"
            contactsList={visibleContacts}
            onChange={this.handleChange}
            value={this.state.filter}
            onClickDelete={this.onClickDelete}
          />
        ) : (
          <p>Phonebook empty</p>
        )}
  </Container>
  )
 }
}

export default App;