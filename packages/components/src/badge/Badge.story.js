import React from 'react';
import Badge from './Badge';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  component: Badge,
  title: 'Badge',
  excludeStories: ['ExampleBadgeCss'],
};

export const ExampleBadgeCss = {
  background: 'var(--color-positive)',
  width: '100%',
  height: '100%',
  color: 'white',
  fontSize: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const basic = () => {
  const BadgeInnerText = text('Badge Inner Text', 'Content');
  const BadgeText = text('BadgeText', 'B');
  const bordered = boolean('bordered', false);
  const variant = select('Variant', ['light', 'dark'], 'light');
  const size = select('Size', ['sm', 'lg'], 'size');

  return (
    <Badge
      badge={<div style={ExampleBadgeCss}>{BadgeText}</div>}
      bordered={bordered}
      variant={variant}
      size={size}
    >
      <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
        {BadgeInnerText}
      </div>
    </Badge>
  );
};
