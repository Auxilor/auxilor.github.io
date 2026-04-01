# `firework`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Launches a firework from the trigger location

# Effect Syntax
```yaml
- id: firework
  args:
    power: 1 # The power of the firework, which affects how high it flies before exploding. (0-255, 0 is instant explosion)
    effects: # You can specify multiply for the firework.
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

:::tip

Depending on your trigger, you may need a mutator to adjust the location of the firework.

:::