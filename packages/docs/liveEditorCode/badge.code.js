import { ExampleBadgeCss } from '../../components/src/badge/Badge.spec';

<Badge
  bordered={false}
  variant="light"
  size="sm"
  badge={ <div style={ExampleBadgeCss}>B</div> }
>
  <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
    Content
  </div>
</Badge>