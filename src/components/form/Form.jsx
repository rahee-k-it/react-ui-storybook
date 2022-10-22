import styled from 'styled-components';
// import Default from './Button,stories';
import Button from '../button/Button';

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: #a4eada9f; */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  padding: 30px 0px;
  width: 300px;
  min-height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 5px #e0e3da;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 35px;
  width: 250px;
  height: 60px;
  /* background-color: #91dbdf; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 50px 0px 10px 0px; */
`;

const FormBoxs = styled.div`
  width: 250px;
  min-height: 10px;
  /* background-color: #aadf91; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
`;

const FormBox = styled.div`
  width: 240px;
  height: 60px;
  /* background-color: #1cea7f; */
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

const Form = () => {
  return (
    <Bg>
      <FormContainer>
        <Title>Create Account</Title>
        <FormBoxs>
          <FormBox>
            <InputName>Full Name</InputName>
            <Input></Input>
          </FormBox>
          <FormBox>
            <InputName>Email Address</InputName>
            <Input></Input>
          </FormBox>
          <FormBox>
            <InputName>Phone Number</InputName>
            <Input></Input>
          </FormBox>
        </FormBoxs>

        <Button
          bgColor="bg-blue-700"
          fontSize="text-xl"
          color="text-white"
          padding="p-3"
          borderRadius="rounded-full"
        >
          Create Account
        </Button>
      </FormContainer>
    </Bg>
  );
};

Form.defaultProps = {};

export default Form;
