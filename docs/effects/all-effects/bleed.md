# `bleed`
:::dangerTriggered Effect
:::

Makes your victim bleed, damaging them repeatedly

# Effect Syntax
```yaml
- id: bleed
  args:
    damage: 5 # The damage to deal on each bleed tick
    interval: 15 # The delay between bleed ticks
    amount: 10 # The amount of bleed ticks
  ...other config (eg triggers, filters, mutators, etc)
```