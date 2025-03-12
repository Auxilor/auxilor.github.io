# `trigger_custom`

Call a custom trigger

> [!danger] Triggered Effect

> [!Example]
> ```yaml
> effects:
> - id: trigger_custom
>   args:
>     trigger: example # The custom trigger ID: use in other effects like custom_id (i.e. custom_example here)
>     value: 1.5 # The value to pass to the trigger, e.g. for EcoPets levelling.
>   ...other config (eg triggers, filters, mutators, etc)
> ```
> You then use the trigger like any other trigger
> ```yaml
> triggers:
>   - custom_example
> ```

> [!help] Trigger by Command
> You can also call custom triggers with `/libreforge trigger <subject> <id> [value]`
> 
> The subject can be any player name or UUID, entity UUID, `global` and `server` for the server,
> and `all` and `everyone` to run it for all players.
