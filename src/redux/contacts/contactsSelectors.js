const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.items;

const getError = state => state.contacts.error;

const contactsSelectors = {
  getLoading,
  getFilter,
  getContacts,
  getError,
};
export default contactsSelectors;
