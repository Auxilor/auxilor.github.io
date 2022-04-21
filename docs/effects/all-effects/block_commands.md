# `block_commands`
#### Permanent Effect

Prevents the execution of certain commands

# Example Config
```yaml
- id: block_commands
  args:
    commands: # The list of commands to block
      - rtp
      - spawn
```