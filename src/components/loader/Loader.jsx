import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faAppleWhole,
  faCloudArrowDown,
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  /* background-color: #cd92bca0; */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1.5s linear infinite;
  /* margin-bottom: 10px; */
`;

const colorChange = keyframes` 
0%{
    color: #a4a8a4;
}
50%{ 
    color: #666b66;
}
100%{
    color: #000000;
}
`;

const Color = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${colorChange} 2s linear infinite;
  /* margin-bottom: 10px; */
`;

const motion = keyframes`
    from{
        margin-top: 0px;
    }

    to{
      margin-top: 50px;
    }

`;

const UpDown = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${motion} 2s linear infinite alternate;
`;

const Loader = () => {
  return (
    <>
      <Container>
        <Spinner>
          <FontAwesomeIcon icon={faSpinner} />
        </Spinner>
        <Text>loading</Text>
      </Container>
    </>
  );
};

const LoaderApple = () => {
  return (
    <>
      <Container>
        <Color>
          <FontAwesomeIcon icon={faAppleWhole} />
          <Text>loading</Text>
        </Color>
      </Container>
    </>
  );
};

const LoaderUpDown = () => {
  return (
    <>
      <Container>
        <UpDown>
          {/* <Spinner> */}
          <FontAwesomeIcon icon={faCloudArrowDown} />

          {/* <FontAwesomeIcon icon={faFan} /> */}
          {/* </Spinner> */}
        </UpDown>
        <Text>loading</Text>
      </Container>
    </>
  );
};

export { Loader, LoaderApple, LoaderUpDown };
