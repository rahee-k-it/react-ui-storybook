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
  // summary의 여닫힘을 제어하는 변수
  const [expanded, setExpandedState] = useState(defaultExpended);
  const [childrenHeight, setChildrenHeightState] = useState(0);
  const childrenRef = useRef(null);
  // 토글 기능을 수행하면서 사용자가 onChange 등록 시 실행
  const handleChange = useCallback(
    (event) => {
      setExpandedState(!expanded);
      if (onChange) {
        onChange(event, !expanded);
      }
    },
    [expanded, onChange, setExpandedState],
  );
  // props로 expanded가 들어올 경우, 상태를 바꿔주기
  useEffect(() => {
    if (typeof expandedProp !== 'undefined') {
      setExpandedState(expandedProp);
    }
  }, [expandedProp]);
  useEffect(() => {
    setChildrenHeightState(childrenRef.current.clientHeight);
  }, [childrenRef]);
  // 첫인자는 summary로 나머지는 details에 들어갈 children으로 취급
  const [summary, ...children] = Children.toArray(childrenProp);
  // 컨텍스트에 넘겨줄 값
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
