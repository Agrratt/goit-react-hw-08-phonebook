import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', contact);
      thunkAPI.dispatch(fetchContactsThunk());
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactsThunk',
  async (id, thunkAPI) => {
    // console.log(id);
    try {
      const result = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContactsThunk());
      console.log(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6294de35a7203b3ed0730a63.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Contact'],

//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),

//     addContact: builder.mutation({
//       query: ({ name, phone }) => ({
//         url: '/contacts',
//         method: 'POST',
//         body: {
//           name: name,
//           phone: phone,
//         },
//       }),
//       invalidatesTags: ['Contact'],
//     }),

//     removeContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useAddContactMutation,
//   useRemoveContactMutation,
// } = contactsApi;
