# `send_minimessage`

Sends the player a minimessage message, supports clickable components, etc.

> [!danger] Triggered Effect

> [!warning] Requires Paper

> [!Example]
> ```yaml
> effects:
> - id: send_minimessage
>   args:
>     message: "<red>You have been blinded!" # The message to send
>     action_bar: true # If the message should go to the action bar instead of chat
>   ...other config (eg triggers, filters, mutators, etc)
> ```
