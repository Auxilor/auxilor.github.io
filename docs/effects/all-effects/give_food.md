# `give_food`
#### Triggered Effect

Gives the player food

# Example Config
```yaml
- id: give_food
  args:
    amount: 2 # The amount of food to give/take (allows negative values)
    respect-vanilla-limits: true # (Optional, defaults to false) if the added food should respect vanilla minimum food (0) and maximum food (20)
  ...other config (eg triggers, filters, mutators, etc)
```