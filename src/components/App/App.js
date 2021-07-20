import { Component } from "react";
import { Wrapper } from "../Wrapper/Wrapper.styles";
import Form from "../Form";
import SectionTitle from "../SectionTitle";
import ContactsList from "../Contacts";
import Filter from "../Filter";
import { v4 as uuidv4 } from "uuid";

import testDataContacts from "../data/data.json";

class App extends Component {
  state = {
    contacts: [...testDataContacts],
    filter: "",
  };

  FormSubmitHandler = (dataSubmit) => {
    const { contacts } = this.state;
    const { name, number } = dataSubmit;

    if (
      contacts.find(
        (contact) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const newElement = [];
    newElement.push(newContact);

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, ...newElement],
    }));
  };

  FilterChange = (evt) => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  FilterContacts = () => {
    const { contacts, filter } = this.state;
    const contactsFilter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return contactsFilter;
  };

  onDeleteContact = (evt) => {
    // console.log("Id", evt.target.name);

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== evt.target.name
      ),
    }));
  };

  render() {
    return (
      <Wrapper>
        <SectionTitle title="Phonebook">
          <Form onSubmit={this.FormSubmitHandler} />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter
            filter={this.state.filter}
            onFilterChange={this.FilterChange}
          />
          <ContactsList
            contactList={this.FilterContacts()}
            onDelete={this.onDeleteContact}
          />
        </SectionTitle>
      </Wrapper>
    );
  }
}

export default App;
