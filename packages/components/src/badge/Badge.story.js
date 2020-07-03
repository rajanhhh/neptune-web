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
  const border = select('Border', ['', Badge.Border.LIGHT, Badge.Border.DARK]);
  const large = boolean('large', false);

  return (
    <Badge
      badge={<div style={ExampleBadgeCss}>{BadgeText}</div>}
      border={border}
      size={large ? Badge.Size.LARGE : null}
    >
      <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
        {BadgeInnerText}
      </div>
    </Badge>
  );
};
