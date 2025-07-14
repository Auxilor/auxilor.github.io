# `pay_price`
#### Triggered Effect

Pay a [price](https://plugins.auxilor.io/all-plugins/prices)

# Effect Syntax
```yaml
- id: pay_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```