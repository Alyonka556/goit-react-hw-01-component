import PropTypes from 'prop-types';

import {
  StyledWrapper,
  StyledCard,
  StyledList,
  StyledElement,
  StyledStatus,
  StyledImg,
  StyledName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledList>
          {friends.map(({ avatar, name, isOnline, id }) => {
            return (
              <StyledElement key={id}>
                <StyledStatus $isOnline={isOnline}>{isOnline}</StyledStatus>
                <StyledImg src={avatar} alt="User avatar" width="48" />
                <StyledName>{name}</StyledName>
              </StyledElement>
            );
          })}
        </StyledList>
      </StyledCard>
    </StyledWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
