import { Children, isValidElement, cloneElement } from 'react';
import Radio from './Radio';

export default function RadioGroup({ label, name = 'default', disabled, onChange, children }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      {Children.map(children, (child) =>
        isValidElement(child) && child.type === Radio
          ? cloneElement(child, {
              name,
              onChange: (value) => onChange && onChange(value),
              groupDisabled: disabled,
            })
          : child,
      )}
    </fieldset>
  );
}
