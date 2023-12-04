import PropTypes from 'prop-types';

import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledItems,
  StyledLabel,
  StyledPercentuage,
} from './Statictics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title = null, stats }) => {
  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}

      <StyledStatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StyledItems
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StyledLabel>{label}</StyledLabel>
              <StyledPercentuage>{percentage}%</StyledPercentuage>
            </StyledItems>
          );
        })}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
