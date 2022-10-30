import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Container = styled.div`
  display: grid;
  grid-template-columns: 3em 1fr 3em;
  position: relative;
  height: 3em;
  box-shadow: 0.1em 0.1em 0.3em 0.1em gray;
  &.disabled {
    pointer-events: none;
    opacity: 0.3;
    background-color: gray;
  }
`;

const Icon = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 1.2em;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'pointer' : 'pointer')};
`;

const SearchIcon = styled(Icon)`
  font-size: 1em;
`;

const CancelIcon = styled(Icon)`
  &:hover {
    opacity: 0.5;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  line-height: 1em;
  background-color: transparent;
  outline: none;
`;

const SearchField = ({
  bgColor,
  fontColor,
  fontSize,
  fontWeight,
  borderColor,
  borderRadius,
  onClick,
  disabled = false,
  ...rest
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText('');
  };

  return (
    <>
      <Container
        className={`text-base ${bgColor} ${fontColor} border-solid border-2 ${borderColor} 
        ${borderRadius} ${disabled && 'disabled'}`}
      >
        <SearchIcon onClick={onClick}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <SearchInput
          autoComplete="off"
          type="text"
          value={text}
          onChange={onChange}
          className={`${fontWeight} ${fontSize}`}
          {...rest}
        />
        <CancelIcon onClick={clearText}>
          <FontAwesomeIcon icon={faXmark} />
        </CancelIcon>
      </Container>
    </>
  );
};

export default SearchField;
