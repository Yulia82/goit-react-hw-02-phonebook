import PropTypes from "prop-types";
import { ItemContact, BtnDelete } from "./ContactsList.styles";

const ContactsList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.number}
          <BtnDelete type="button" name={contact.id} onClick={onDelete}>
            delete
          </BtnDelete>
        </ItemContact>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
