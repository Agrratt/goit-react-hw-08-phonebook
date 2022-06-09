import { useSelector } from 'react-redux';
import { Form } from 'components/Form/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import { fetchContactsThunk } from 'redux/contacts/contactsOperations';
import { MainTitle, Title } from 'components/Form/Form.styled';

export default function ContactPage() {
  const contacts = useSelector(fetchContactsThunk);

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Form />

      <Title>Contacts</Title>
      <Filter />
      {contacts.length > 0 ? (
        <ListContacts />
      ) : (
        <Message message="Сontact list is empty" />
      )}
    </>
  );
}
