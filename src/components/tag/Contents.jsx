import { useCallback, useState } from 'react';

function Contents({ className, children, liClickedBgColor = '', liBgColor = '', isTruncate }) {
  const handleClick = useCallback(() => {
    setIsClicked((prev) => !prev);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center border-solid border p-2 text-center cursor-pointer mx-1 my-1 ${
        className ?? ''
      } ${isClicked ? liClickedBgColor : liBgColor}`}
    >
      {children}
    </div>
  );
}

export default Contents;
