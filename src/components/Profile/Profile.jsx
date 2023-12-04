import PropTypes from 'prop-types';

import {
  StyledProfile,
  StyledDescription,
  StyledImg,
  StyledName,
  StyledTag,
  SryledLocation,
  StyledStats,
  StyledItems,
  StyledLabel,
  StyledQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => {
  return (
    <>
      <StyledProfile>
        <StyledDescription>
          <StyledImg src={avatar} alt={username} />
          <StyledName>{username}</StyledName>
          <StyledTag>@{tag}</StyledTag>
          <SryledLocation>{location}</SryledLocation>
        </StyledDescription>

        <StyledStats>
          <StyledItems>
            <StyledLabel>Followers</StyledLabel>
            <StyledQuantity>{followers}</StyledQuantity>
          </StyledItems>
          <StyledItems>
            <StyledLabel>Views</StyledLabel>
            <StyledQuantity>{views}</StyledQuantity>
          </StyledItems>
          <StyledItems>
            <StyledLabel>Likes</StyledLabel>
            <StyledQuantity>{likes}</StyledQuantity>
          </StyledItems>
        </StyledStats>
      </StyledProfile>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
