import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const spinEffect = keyframes`
  from {transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spinEffect} 1.5s linear infinite;
`;

const winkEffect = keyframes` 
  0% { opacity: 0.2 }
  100% { opacity: 1; } 
`;

const Winker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${winkEffect} 2s ease-in-out infinite alternate;
`;

const floatEffect = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-10px) }
`;

const Floater = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${floatEffect} 1.5s linear infinite alternate;
`;

const Loader = ({ effect, icon, children }) => {
  const [effectComponent, setEffectComponent] = useState('');
  useEffect(() => {
    if (effect === 'spin') setEffectComponent(<Spinner>{icon}</Spinner>);
    else if (effect === 'wink') setEffectComponent(<Winker>{icon}</Winker>);
    else if (effect === 'float') setEffectComponent(<Floater>{icon}</Floater>);
    else setEffectComponent(<div>{icon}</div>);
  }, [effect, icon]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center">
      {effectComponent}
      <p className="mt-[10px]">{children}</p>
    </div>
  );
};

export default Loader;
