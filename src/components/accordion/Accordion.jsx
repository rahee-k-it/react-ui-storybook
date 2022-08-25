import { useState, useCallback, useEffect, useMemo, Children, useRef } from 'react';
import AccordionContext from './AccordionContext';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  overflow: hidden;
`;

const AccordionDetailsWrapper = styled.div`
  max-height: ${({ expanded, childrenHeight }) => (expanded ? `${childrenHeight}px` : '0px')};
  transition: max-height 0.3s ease-in-out;
`;

const Accordion = ({
  children: childrenProp,
  className,
  defaultExpended = false,
  disabled = false,
  expanded: expandedProp,
  onChange,
  ...other
}) => {
  const [expanded, setExpandedState] = useState(defaultExpended);
  const [childrenHeight, setChildrenHeightState] = useState(0);
  const childrenRef = useRef(null);
  const handleChange = useCallback(
    (event) => {
      setExpandedState(!expanded);
      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedState],
  );
  useEffect(() => {
    if (typeof expandedProp !== 'undefined') {
      setExpandedState(expandedProp);
    }
  }, [expandedProp]);
  useEffect(() => {
    setChildrenHeightState(childrenRef.current.clientHeight);
  }, [childrenRef]);
  const [summary, ...children] = Children.toArray(childrenProp);
  const contextValue = useMemo(
    () => ({ expanded, disabled, toggle: handleChange }),
    [expanded, disabled, handleChange],
  );
  return (
    <AccordionContainer className={className} {...other}>
      <AccordionContext.Provider value={contextValue}>{summary}</AccordionContext.Provider>
      <AccordionDetailsWrapper expanded={expanded} childrenHeight={childrenHeight}>
        <div ref={childrenRef}>{children}</div>
      </AccordionDetailsWrapper>
    </AccordionContainer>
  );
};

export default Accordion;
