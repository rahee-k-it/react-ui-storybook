import { Children, isValidElement, useMemo } from 'react';

const BreadCrumbs = (props) => {
  const { children, className = '', separator = '/', ...other } = props;
  const allItems = useMemo(
    () =>
      Children.toArray(children).reduce(
        (acc, child, index) =>
          isValidElement(child) ? [...acc, <li key={`breadcrumb-${index}`}>{child}</li>] : acc,
        [],
      ),
    [children],
  );
  return (
    <ul className={`flex items-center flex-wrap ${className}`} {...other}>
      {allItems.reduce((acc, current, index) => {
        if (index < allItems.length - 1) {
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
};
export default BreadCrumbs;
