import { Children, isValidElement, useMemo } from 'react';

function TabBar({ children, className, others }) {
  const tagBar = useMemo(
    () =>
      Children.toArray(children).reduce(
        (acc, child, index) =>
          isValidElement(child)
            ? [
                ...acc,
                <li data-li-id={index} key={`tapBar-${index}`}>
                  {child}
                </li>,
              ]
            : acc,
        [],
      ),
    [children],
  );

  return (
    <ul
      className={`grid grid-cols-${children.length} grid-rows-1 items-center ${className}`}
      {...others}
    >
      {tagBar.reduce((acc, current) => {
        acc.push(current);
        return acc;
      }, [])}
    </ul>
  );
}

export default TabBar;
