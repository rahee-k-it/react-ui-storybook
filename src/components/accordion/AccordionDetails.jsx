const AccordionDetails = ({ className, children, ...others }) => {
  return (
    <div className={`px-4 py-2 ${className}`} {...others}>
      {children}
    </div>
  );
};

export default AccordionDetails;
