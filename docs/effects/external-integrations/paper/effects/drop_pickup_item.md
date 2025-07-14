# `drop_pickup_item`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Drops an item that runs a chain on pickup

:::infoRequires:
Paper
:::
# Example Config

```yaml
- id: drop_pickup_item
  args:
      item: diamond # The item texture, cannot actually be picked up
      glow-color: aqua # (Optional) The glow color, check here: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html
      run-type: normal # (Optional) The run type, see 'configuring an effect'
      effects:
          - id: send_message
            args:
                message: "&a+ &b20 Crystals ❖"
          - id: give_price
            args:
                type: crystals
                value: 20
                display: ""
    ...other config (eg triggers, filters, mutators, etc)
```
