# `firework`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Shoots a firework

# Effect Syntax
```yaml
- id: shoot_firework
  args:
    inherit_velocity: true # If velocity should be inherited from the trigger
    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false
    launch-at-location: false # If the firework should be launched at the location of the trigger rather than the player (Default: false)
    power: 1 # The power of the firework, which affects how far it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply effects for the firework.
      - type: CREEPER # The firework shape: BALL, BALL_LARGE, STAR, CREEPER, BURST
        colors: # The firework colors, in hex format
          - "#e5006d"
          - "#ff0000"
        fade_colors:
          - "#ffffff"
        trail: true # If the firework should have a trail
        flicker: true # If the firework should flicker
  ...other config (eg triggers, filters, mutators, etc)
```