import Form from './Form';
import styled from 'styled-components';
import Button from '../button/Button';
import { fontColors, fontSizes, fontWeights } from '../common';

export default {
  title: 'Form',
  component: Form,
  argTypes: {
    title: { control: 'text' },
    onSubmit: { table: { disable: true } },
    inputs: { control: 'object' },

    titleColor: { control: 'select', options: fontColors },
    titleFontSize: { control: 'select', options: fontSizes },
    titleFontWeight: { control: 'select', options: fontWeights },
  },
};

const FormBoxs = styled.div`
  width: 250px;
  min-height: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
`;

const FormBox = styled.div`
  width: 240px;
  height: 60px;
  margin: 5px;
`;

const InputName = styled.div`
  font-size: 16px;
  height: 15px;
  background-color: white;
  z-index: 1;
  position: absolute;
  margin-left: 30px;
`;

const Input = styled.input`
  font-size: 20px;
  width: 240px;
  height: 50px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 50px;
  position: relative;
  margin-top: 5px;
  padding-top: 10px;
  padding-left: 20px;
`;

const FormContainer = styled.div`
  width: 300px;
  min-height: 400px;
  padding: 30px 0px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 5px #e0e3da;
`;

export const Default = ({ title, inputs, titleColor, titleFontSize, titleFontWeight }) => {
  return (
    <FormContainer>
      <Form
        title={title}
        onSubmit={() => {
          console.log('hello!');
        }}
        titleColor={titleColor}
        titleFontSize={titleFontSize}
        titleFontWeight={titleFontWeight}
      >
        <FormBoxs>
          {inputs.map((input) => (
            <FormBox>
              <InputName>{input.name}</InputName>
              <Input type={input.type} />
            </FormBox>
          ))}
        </FormBoxs>
        <Button
          bgColor="bg-blue-700"
          fontSize="text-xl"
          color="text-white"
          padding="p-3"
          borderRadius="rounded-full"
          type="submit"
        >
          Create Account
        </Button>
      </Form>
    </FormContainer>
  );
};
Default.args = {
  title: 'Signup',
  inputs: [
    { name: 'Full Name', type: 'text' },
    { name: 'Email', type: 'email' },
    { name: 'Phone Number', type: 'tel' },
  ],
};
