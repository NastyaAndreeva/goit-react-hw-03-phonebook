import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RiContactsBook2Line } from 'react-icons/ri';
import { Button } from 'components/ui/Button';
import { theme } from 'stylesConfig/theme';

const FriendListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin: 5px;
  }
`;

export const FriendList = ({ friends, onDeleteContact }) => {
  return (
    <FriendListStyled friends={friends}>
      {friends.map(({ id, name, number }) => (
        <FriendListItem key={id}>
          <RiContactsBook2Line fill={theme.colors.backgroundBlueBtn} />
          <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </FriendListItem>
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
