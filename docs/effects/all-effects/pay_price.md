# `pay_price`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Pay a [price](https://plugins.auxilor.io/all-plugins/prices)

# Effect Syntax
```yaml
- id: pay_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```