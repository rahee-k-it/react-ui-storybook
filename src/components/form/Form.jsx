import { useCallback } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = ({ title, onSubmit, titleColor, titleFontSize, titleFontWeight, children }) => {
  const handleSubmit = useCallback((e) => {
    // 새로고침 방지
    e.preventDefault();
    onSubmit && onSubmit(e);
  }, []);
  return (
    <FormContainer onSubmit={handleSubmit}>
      {title && (
        <Title className={`${titleColor} ${titleFontSize} ${titleFontWeight}`}>{title}</Title>
      )}
      {children}
    </FormContainer>
  );
};

Form.defaultProps = {
  onSubmit: (e) => {},
  titleColor: 'text-black',
  titleFontSize: 'text-2xl',
  titleFontWeight: 'font-black',
};

export default Form;
