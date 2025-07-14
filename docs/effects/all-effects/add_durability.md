# `add_durability`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Increase the max durability of an item

:::infoRequires:
Server Version 1.21+
:::
# Effect Syntax
```yaml
- id: add_durability
  args:
    durability: 100 # The durability to add (or subtract)
  ...other config (eg triggers, filters, mutators, etc)
```