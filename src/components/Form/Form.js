import { Component } from "react";
import PropTypes from "prop-types";
import { FormLabel, FormInput, FormStyle, BtnSubmit } from "./Form.styles";

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
      <FormStyle onSubmit={this.FormSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            value={this.state.name}
            onChange={this.InputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </FormLabel>

        <FormLabel>
          Fhone number
          <FormInput
            type="tel"
            value={this.state.number}
            onChange={this.InputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </FormLabel>

        <BtnSubmit type="submit">ADD CONTACT</BtnSubmit>
      </FormStyle>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
