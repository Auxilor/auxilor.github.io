# `glow_nearby_blocks`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Make nearby blocks of a certain type glow a certain color

# Effect Syntax
```yaml
- id: glow_nearby_blocks
  args:
    radius: 10 # The radius, in blocks
    duration: 30 # How long to show the glow effect for, in ticks
    colors:
      diamond_ore: aqua # Add as many blocks as you want, the color is from https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
  ...other config (eg triggers, filters, mutators, etc)
```