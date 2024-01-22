import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ccc;
    border-color: #999;
    color: #fff;
  }
`;

export default StyledButton;
