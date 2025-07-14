# `trigger_custom`
:::dangerTriggered Effect
:::

Call a custom trigger

# Effect Syntax
```yaml
- id: trigger_custom
  args:
    trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
    value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
  ...other config (eg triggers, filters, mutators, etc)
```

You then use the trigger like any other trigger:
```yaml
triggers:
  - custom_example
```


You can also call custom triggers with `/libreforge trigger <subject> <id> [value]`

The subject can be any player name or UUID, entity UUID, `global` and `server` for the server,
and `all` and `everyone` to run it for all players.
