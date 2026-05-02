# `set_glowing`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Sets an entity's glowing state, optionally reverting it after a duration

# Effect Syntax
```yaml
- id: set_glowing
  args:
    glowing: true # (Optional) Whether to enable glowing, defaults to true
    duration: 100 # (Optional) Ticks before the glowing state is reverted
  ...other config (eg triggers, filters, mutators, etc)
```