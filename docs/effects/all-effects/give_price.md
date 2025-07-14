# `give_price`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Pay a [price](https://plugins.auxilor.io/all-plugins/prices) to a player

# Effect Syntax
```yaml
- id: give_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```