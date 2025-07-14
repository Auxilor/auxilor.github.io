# `give_magic`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Add / subtract magic

:::infoRequires:
EcoSkills
:::
# Effect Syntax
```yaml
- id: give_magic
  args:
    type: mana # The point to add/subtract
    amount: 15 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```