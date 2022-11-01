function Tag({ className, children }) {
  return <ul className={`grid auto-rows-auto p-3 gap-3 ${className ?? ''}`}>{children}</ul>;
}

export default Tag;
