# `broadcast`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Send a message to everyone online

# Effect Syntax
```yaml
- id: broadcast
  args:
    message: "%player%&f has just won &a$1000&f!" # The message to send
  ...other config (eg triggers, filters, mutators, etc)
```