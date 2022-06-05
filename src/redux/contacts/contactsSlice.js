import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from 'redux/contacts/contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isLoading: true,
    error: null,
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
// items: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     filter: '',
//     isLoading: true,
//     error: null,
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     removeContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, removeContact, filterContacts } =
//   contactsSlice.actions;

//Selectors:
// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;
