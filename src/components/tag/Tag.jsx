import { Children, isValidElement, useMemo } from 'react';

function Tag({ className, children, contents, ...others }) {
  const tagList = useMemo(
    () =>
      Children.toArray(children).reduce(
        (acc, child, index) =>
          isValidElement(child) ? [...acc, <li key={`tagLi-${index}`}>{child}</li>] : acc,
        [],
      ),
    [children],
  );
  return (
    <ul className={`flex items-center flex-wrap ${className}`} {...others}>
      {tagList.reduce((acc, current) => {
        acc.push(current);
        return acc;
      }, [])}
    </ul>
  );
}

export default Tag;
