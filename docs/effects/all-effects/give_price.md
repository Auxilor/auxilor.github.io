# `give_price`
#### Triggered Effect

Pay a [price](https://plugins.auxilor.io/all-plugins/prices) to a player

# Example Config
```yaml
- id: give_price
  args:
    value: 1000 # The value of the price
    type: coins # The price type
  ...other config (eg triggers, filters, mutators, etc)
```