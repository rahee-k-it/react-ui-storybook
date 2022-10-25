import React, { useEffect, useCallback, useState } from 'react';
export default function RadioGroup({ name = 'default', children, onChangeRadio = (id) => { } }) {
  const [selectedRadioID, setselectedRadioID] = useState();

  useEffect(() => {
    onChangeRadio(selectedRadioID);
  }, [selectedRadioID]);

  const onChange = useCallback((e) => {
    if (e.target.checked) setselectedRadioID(e.target.id);
  }, []);

  const childrenWithProps = useCallback(
    React.Children.map(children, (child) => {
      // 자식 컴포넌트의 상태를 변경
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { name, onChange });
      }
      return child;
    }), [children]);

  return <div>{childrenWithProps}</div>;
}
