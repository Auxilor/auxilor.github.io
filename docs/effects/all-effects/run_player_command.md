# `run_player_command`
#### Triggered Effect

Runs a command as a player

# Example Config
```yaml
- id: run_player_command
  args:
    command: "kick %victim% Slapped out of the server" # Supports %player% and %victim% as placeholders (victim will only be used if there is a player as a victim for this effect)
    as_op: true # If the command should be ran as op
  ...other config (eg triggers, filters, mutators, etc)
```