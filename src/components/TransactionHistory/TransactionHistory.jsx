import PropTypes from 'prop-types';

import {
  StyledTransacrions,
  StyledTableThead,
  StyledHeadTr,
  StyledTitle,
  StyledBody,
  StyledKeyId,
  StyledValue,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTransacrions>
      <StyledTableThead>
        <StyledHeadTr>
          <StyledTitle>Type</StyledTitle>
          <StyledTitle>Amount</StyledTitle>
          <StyledTitle>Currency</StyledTitle>
        </StyledHeadTr>
      </StyledTableThead>

      <StyledBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <StyledKeyId key={id}>
              <StyledValue>{type}</StyledValue>
              <StyledValue>{amount}</StyledValue>
              <StyledValue>{currency}</StyledValue>
            </StyledKeyId>
          );
        })}
      </StyledBody>
    </StyledTransacrions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
