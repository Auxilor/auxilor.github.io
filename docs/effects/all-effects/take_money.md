# `take_money`
:::infoRequires:
Vault
:::

:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Takes money from the player
# Effect Syntax
```yaml
- id: take_money
  args:
    amount: 1000 # The amount of money to take
  ...other config (eg triggers, filters, mutators, etc)
```