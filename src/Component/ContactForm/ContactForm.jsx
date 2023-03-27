import { Component } from "react";
import { Form } from "./ContactForm.styled";
import { nanoid } from "nanoid";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addContacts = (event) => {
    event.preventDefault();
    const contact = { ...this.state, id: nanoid() };
    this.props.addContact(contact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.addContacts}>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
