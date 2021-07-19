const ContactsList = ({ contactList, onDelete }) => {
  // console.log('contactList::::', contactList);
  return (
    <ul>
      {contactList.map((contact) => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button type="button" name={contact.id} onClick={onDelete}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
