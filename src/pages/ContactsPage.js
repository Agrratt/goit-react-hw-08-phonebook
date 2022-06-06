import { useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import { fetchContactsThunk } from 'redux/contacts/contactsOperations';

export default function ContactPage() {
  const contacts = useSelector(fetchContactsThunk);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ListContacts />
      ) : (
        <Message message="Сontact list is empty" />
      )}
    </div>
  );
}
