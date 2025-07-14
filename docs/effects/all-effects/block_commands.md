# `block_commands`
:::infoPermanent Effect
:::

Prevents the execution of certain commands

# Effect Syntax
```yaml
- id: block_commands
  args:
    messages: # (Optional) the messages to send if a player tries to run the commands
      - "&cYou can't do this!"
    commands: # The list of commands to block
      - rtp
      - spawn
```