# `send_message`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Sends the player a message

# Effect Syntax
```yaml
- id: send_message
  args:
    message: "&cYou have been blinded!" # The message to send
    messages: # You can also specify a list of messages
      - ""
      - "&fYou have been blinded!"
      - ""
    action_bar: true # If the message should go to the action bar instead of chat
  ...other config (eg triggers, filters, mutators, etc)
```