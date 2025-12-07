# `give_edprison_pouch`
:::infoRequires:
EdPrison
:::

:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Gives the player an EdPrison pouch.
# Effect Syntax
```yaml
- id: give_edprison_pouch
  args:
    type: blocks # the ID of the pouch type
    unlocked: true # Whether the pouch is unlocked
  ...other config (eg triggers, filters, mutators, etc)
```
