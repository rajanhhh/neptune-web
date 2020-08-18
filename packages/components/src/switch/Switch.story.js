import React, { useState } from 'react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  const [checked, setCheck] = useState(false);
  const labelText = 'A possible label';

  return (
    <>
      <label htmlFor="myFieldId">{labelText}</label>
      <Switch
        checked={checked}
        className="a-class-name"
        onClick={() => setCheck(!checked)}
        id="myFieldId"
        translations={{ ariaDescription: labelText }}
      />
    </>
  );
};
