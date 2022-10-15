import { useCallback } from 'react';

function BreadCrumb({
  clickUrl,
  clickTitle,
  id,
  length,
  partitionIcon,
  partitionIconBoxClassName,
  linkBoxClassName,
  onClick = () => {},
}) {
  const moveUrl = useCallback(
    (event) => {
      event.preventDefault();
      onClick(clickUrl, clickTitle, id);
    },
    [onClick, clickUrl, clickTitle, id],
  );

  const currentUrl = window.location.href;

  return (
    <>
      {length === undefined || length === 0 ? null : (
        <div className={`${partitionIconBoxClassName ?? ''} flex items-center `}>
          <span>{partitionIcon ?? '<'}</span>
        </div>
      )}

      <div className={`${linkBoxClassName ?? ''} `}>
        {currentUrl !== clickUrl ? (
          <a href={clickUrl} onClick={moveUrl}>
            <span>{clickTitle}</span>
          </a>
        ) : (
          <span>{clickTitle}</span>
        )}
      </div>
    </>
  );
}
export default BreadCrumb;
