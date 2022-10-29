import { useState } from 'react';
import { useCallback } from 'react';

function Li({ className, children, liClickedBgColor, liBgColor }) {
  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <li
      onClick={handleClick}
      className={`${className} ${isClicked ? liClickedBgColor : liBgColor}`}
    >
      {children}
    </li>
  );
}

export default Li;
