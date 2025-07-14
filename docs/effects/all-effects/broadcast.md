# `broadcast`
:::dangerTriggered Effect
:::

Send a message to everyone online

# Effect Syntax
```yaml
- id: broadcast
  args:
    message: "%player%&f has just won &a$1000&f!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```