import React from "react";
import PropTypes from 'prop-types';
import { BlockName, ItemStyled } from 'components/ItemContacts/ItemContacts.styled';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from 'components/icons/deleteIcon.svg';


export const ItemContacts = ({ name, number, deleteContact, id }) => {
    return (
        <>
            <ItemStyled>
                <BlockName>{name}</BlockName>
                <span>{number}</span>

                <IconButton
                    deleteContact={deleteContact}
                    id={id}
                    aria-label='Delete contact'
                >
                     <DeleteIcon width='12' height='12' fill='#e2a5b1'/>
                </IconButton>

                {/* <ButtonDelete type="button" onClick={() => deleteContact(id)}>Delete</ButtonDelete> */}
            </ItemStyled>
        </>
    );
};

ItemContacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    id: PropTypes.string
};