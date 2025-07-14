# `run_command`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Runs a command from console

# Effect Syntax
```yaml
- id: run_command
  args:
    command: "tempban %victim% 24h Hardcore Mode Ban, killed by %player%" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
  ...other config (eg triggers, filters, mutators, etc)
```