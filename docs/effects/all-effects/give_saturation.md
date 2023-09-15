# `give_saturation`
#### Triggered Effect

Gives the player saturation

# Example Config
```yaml
- id: give_saturation
  args:
    amount: 1.0 # The amount of saturation to give/take (allows negative values)
    respect-vanilla-limits: true # (Optional, defaults to false) if the added saturation should respect vanilla minimum saturation (0.0) and maximum saturation (20.0 or player's current food level, whichever is lower)
  ...other config (eg triggers, filters, mutators, etc)
```