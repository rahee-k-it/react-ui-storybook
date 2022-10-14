import { Loader, LoaderApple, LoaderUpDown } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {},
};

export const IconSpin = () => {
  return (
    <>
      <Loader></Loader>
    </>
  );
};

export const IconColorChange = () => {
  return (
    <>
      <LoaderApple></LoaderApple>
    </>
  );
};

export const IconUpAndDown = () => {
  return (
    <>
      <LoaderUpDown></LoaderUpDown>
    </>
  );
};
