import { useEffect } from 'react';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { ContactsList } from 'components/ListContacts/ListContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';
import { fetchContactsThunk } from 'redux/contacts/contactsOperations';
import contactsSelectors from 'redux/contacts/contactsSelectors';

export function ListContacts() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const onDeleteContact = (id) => dispatch(deleteContactThunk(id));
  
  const onSearchByName = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };


  const arrayContacts = onSearchByName();

  return (
    <>
      <ContactsList>
        {arrayContacts.map(({ id, name, number }) => {
          return (
          
            <ItemContacts
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={onDeleteContact}
            />
          );
        }

        )}
      </ContactsList>

    </>
  );
};