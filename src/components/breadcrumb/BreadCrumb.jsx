import { Children, isValidElement, useCallback, useMemo } from 'react';

function BreadCrumb({ children, className = '', separator = '/', onClick, ...others }) {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      onClick && onClick(e.target.href, e.target.innerText);
    },
    [onClick],
  );
  const breadCrumbList = useMemo(
    () =>
      Children.toArray(children).reduce(
        (acc, child, index) =>
          isValidElement(child) ? [...acc, <li key={`breadcrumb-${index}`}>{child}</li>] : acc,
        [],
      ),
    [children],
  );

  return (
    <ul onClick={handleClick} className={`flex items-center flex-wrap ${className}`} {...others}>
      {breadCrumbList.reduce((acc, current, index) => {
        if (index < breadCrumbList.length - 1) {
          acc = acc.concat(
            current,
            <li key={`separator-${index}`} className="mx-1">
              {separator}
            </li>,
          );
        } else {
          acc.push(current);
        }
        return acc;
      }, [])}
    </ul>
  );
}
export default BreadCrumb;
