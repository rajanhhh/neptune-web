- Start Date: 18-08-2020
- RFC PR:
  ​

# Summary

Currently there's no a consistent API to manage internalisation in neptune web components. This RFC aims to provide an overview on the suggested solution and on the deprecation strategy for the new translation API.

# Motivation

- Some of our components have hardcoded string which makes impossible to achieve a full internalisation.
- The way we manage strings is not very scalable and can be improved by grouping all the texts into an object.

## Code example

This is an example of hardcoded string in our code base that can be extracted

```
<MoneyInput>
    <Select placeholder="Select an option..."/>
</MoneyInput>
```

The above example will turn into the following one where consumers can pass placeholder in any language they need.

```
<MoneyInput translations={{placeholder:"your placeholder translated"}}>
    <Select placeholder={props.translations.placeholder} />
</MoneyInput>
```

## Deprecation

The deprecation process we suggest will involve keep the old API signature along the new translation object and mark as deprecated the old props

```
<Component title='a title' description='a description' alt='an alt' />

Component.propTypes = {
    title: Types.node
    description: Types.node,
    alt: Types.node,
}
```

```
<Component title='a title' translations={{title:'a title', description:'a description' alt:'an alt'}} />

Component.propTypes = {
    /**
     * @Deprecated in favour of translations.
     */
    title: Types.node,
    translations: Types.shape({
        title: Types.node,
        description: Types.node,
        alt: Types.node,
    })
}
```
