import { useState } from 'react';
import { useCallback } from 'react';

function Li({ className, children, liClickedBgColor = '', liBgColor = '' }) {
  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <li
      onClick={handleClick}
      className={`flex items-center justify-center border-solid border p-2 text-center cursor-pointer ${
        className ?? ''
      } ${isClicked ? liClickedBgColor : liBgColor}`}
    >
      {children}
    </li>
  );
}

export default Li;
