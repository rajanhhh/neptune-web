import React from 'react';

const generateCodeBlock = (componentName, knobs, componentThis, extraPropsDocs = {}) => {
  const arrayOfObjectToArray = [];
  Object.values({ ...knobs }).map(knob => arrayOfObjectToArray.push(...knob));

  const docs = arrayOfObjectToArray.map(knob =>
    generateDocsWithUpdatedStateValue(knob, componentThis.state),
  );

  if (Object.values(extraPropsDocs).length) {
    const objectToArrayofStrings = Object.keys(extraPropsDocs)
      .filter(key => extraPropsDocs[key] !== undefined)
      .map(key => `${key}=${generateFormattedValue(extraPropsDocs[key])}`);
    docs.push(objectToArrayofStrings.join('\n\r  '));
  }

  return (
    <pre className="tw-docs-code ">
      {`<${componentName}
  ${docs.join('\n\r  ')}
/>`}
    </pre>
  );
};

const generateDocsWithUpdatedStateValue = (knob, componentState) => {
  let value = '';

  if (componentState[knob.state] || componentState[knob.state] === false) {
    if (componentState[knob.state].value || componentState[knob.state].value === 0) {
      ({ value } = componentState[knob.state]);
    } else {
      value = componentState[knob.state];
    }
  }

  return `${knob.state}=${generateFormattedValue(value)}`;
};

const generateFormattedValue = value => {
  if (value === null) {
    return '{null}';
  }
  switch (typeof value) {
    case 'boolean':
    case 'number':
      return `{${value}}`;

    case 'string':
      if (value.indexOf('=>') >= 0) {
        return `{${value}}`;
      }
      return `"${value}"`;

    case 'object':
      if (React.isValidElement(value)) {
        return `{${value}}`;
      }

      if (value instanceof Date) {
        return `{"${value || ''}"}`;
      }

      return `{${JSON.stringify(value, null, '    ')}}`;

    case 'function':
      return `{${value.toString()}}`;

    default:
      return `"${value || ''}"`;
  }
};

export default generateCodeBlock;
