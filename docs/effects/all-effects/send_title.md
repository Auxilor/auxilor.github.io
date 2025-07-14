# `send_title`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Send a title/subtitle to the player

# Effect Syntax
```yaml
- id: send_title
  args:
    title: "&aCongratulations %player%!" # The title
    subtitle: "&3You won $1000" # The subtitle
  ...other config (eg triggers, filters, mutators, etc)
```