# `set_edprison_economy`
:::infoRequires:
EdPrison
:::

:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Sets the EdPrison economy for the player
# Effect Syntax
```yaml
- id: set_edprison_economy
  args:
    type: blocks # the ID of the economy type
    amount: 100 # The amount to set
  ...other config (eg triggers, filters, mutators, etc)
```
