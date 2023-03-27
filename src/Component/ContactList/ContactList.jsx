import { Component } from "react";

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <span>{name}: </span>
            <span>{number}       </span>
            <button onClick={() => this.props.onDelete(id)} type="button">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
