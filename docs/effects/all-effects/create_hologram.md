# `create_hologram`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Creates a hologram temporarily (Requires a hologram plugin to be installed)

# Effect Syntax

```yaml
- id: create_hologram
  args:
      text: # The text in the hologram
          - "&FThis is a hologram!"
          - "&cThis is a second line."
      duration: 40 # The duration (in ticks)
    ...other config (eg triggers, filters, mutators, etc)
```