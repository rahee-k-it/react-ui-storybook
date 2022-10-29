function Tag({ className, children }) {
  return (
    <ul className={`grid auto-rows-auto p-3 w-fit gap-3 truncate ${className ?? ''}`}>
      {children}
    </ul>
  );
}

export default Tag;
