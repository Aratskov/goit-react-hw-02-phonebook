import { ContactForm } from "./Component/ContactForm/ContactForm";
import { Filter } from "./Component/Filter/Filter";
import { ContactList } from "./Component/ContactList/ContactList";

import { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${contact.name} is already in contacts!`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  findChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filterSmall = filter.toLowerCase();
    return contacts.filter((el) => el.name.toLowerCase().includes(filterSmall));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter find={this.findChange} />

        <ContactList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
