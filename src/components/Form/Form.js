import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  InputChange = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  FormSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    // console.log(this.state);

    this.props.onSubmit(this.state);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.FormSubmit}>
        <label>
          name
          <input
            type="text"
            value={this.state.name}
            onChange={this.InputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          Fhone number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.InputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
