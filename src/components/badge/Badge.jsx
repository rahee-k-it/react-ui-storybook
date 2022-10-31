function Badge({ showBadge = true, className, badgePosition = 'custom', children }) {
  const badgePositionObj = {
    leftTop: 'right-3/4 bottom-3/4',
    leftBottom: 'right-3/4 top-3/4',
    rightTop: 'left-3/4 bottom-3/4',
    rightBottom: 'left-3/4 top-3/4',
  };

  return (
    <>
      {showBadge ? (
        <div
          className={`p-1 absolute text-center ${className ?? ''} ${
            badgePositionObj[badgePosition]
          }`}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

export default Badge;
