import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const Effecter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const spinEffect = keyframes`
  from {transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled(Effecter)`
  animation: ${spinEffect} 1.5s linear infinite;
`;

const winkEffect = keyframes` 
  0% { opacity: 0.2 }
  100% { opacity: 1; } 
`;

const Winker = styled(Effecter)`
  flex-direction: column;
  animation: ${winkEffect} 2s ease-in-out infinite alternate;
`;

const floatEffect = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-10px) }
`;

const Floater = styled(Effecter)`
  animation: ${floatEffect} 1.5s linear infinite alternate;
`;

const Loader = ({ effect, icon, children }) => {
  const [effectComponent, setEffectComponent] = useState('');
  useEffect(() => {
    if (effect === 'spin') setEffectComponent(<Spinner>{icon}</Spinner>);
    else if (effect === 'wink') setEffectComponent(<Winker>{icon}</Winker>);
    else if (effect === 'float') setEffectComponent(<Floater>{icon}</Floater>);
    else setEffectComponent(<Effecter>{icon}</Effecter>);
  }, [effect, icon]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center">
      {effectComponent}
      {children}
    </div>
  );
};

export default Loader;
