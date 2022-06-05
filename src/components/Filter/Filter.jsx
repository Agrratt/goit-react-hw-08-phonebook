import { InputFilter } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
// import contactsSelectors from 'redux/contacts/contactsSelectors';


export const Filter = () => {
    // const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    const onChangeFilter = (evt) => dispatch(filterContacts(evt.target.value));
  
    
    return (
        <label>
            Find contacts by name <br />
            <InputFilter
                type="text"
                // value={filter}
                name="filter"
                onChange={onChangeFilter} />
        </label>
    )
};