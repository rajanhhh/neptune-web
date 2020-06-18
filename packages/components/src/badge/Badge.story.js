import React from 'react';
import Badge from './Badge';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  component: Badge,
  title: 'Badge',
};

export const basic = () => {
  const BadgeInnerText = text('Badge Inner Text', 'Content');
  const BadgeText = text('BadgeText', 'B');
  const outline = boolean('Outline', false);
  const variant = select('Variant', ['light', 'dark'], 'light');

  return (
    <Badge
      badge={
        <div
          style={{
            background: 'var(--color-positive)',
            width: '100%',
            height: '100%',
            color: 'white',
            fontSize: '0.8em',
          }}
        >
          {BadgeText}
        </div>
      }
      outline={outline}
      variant={variant}
    >
      <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
        {BadgeInnerText}
      </div>
    </Badge>
  );
};
