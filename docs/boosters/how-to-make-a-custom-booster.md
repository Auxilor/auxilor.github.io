---
title: How to make a Booster
sidebar_position: 1
---
Boosters are a great way to give players a temporary boost in the game, such as a sell multiplier or a resource boost. They can be activated by players to enhance their gameplay experience.

## Creating a Booster

Each booster has its own config file, placed in the `/boosters/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the booster is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Booster Config

```yaml
name: "1.5x Sell Multiplier" 
duration: 72000 

effects:
  - id: sell_multiplier
    args:
      multiplier: 1.5

conditions: []

activation-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " %activator%&f has activated a &a1.5x Sell Multiplier Booster&f!"
        - " &fThis booster will last an hour, be sure to thank them!"
        - ""

increment-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " %activator%&f has increased the &a1.5x Sell Multiplier Booster's duration&f!"
        - " &fThis booster will last another hour, be sure to thank them!"
        - ""

expiry-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " &fThe &a1.5x Sell Multiplier Booster&f has ended"
        - " &fGet another one here: &ahttps://store.ecomc.net/package/756887"
        - ""

gui:
  item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTM0YjI3YmZjYzhmOWI5NjQ1OTRiNjE4YjExNDZhZjY5ZGUyNzhjZTVlMmUzMDEyY2I0NzFhOWEzY2YzODcxIn19fQ==
  name: "&d1.5x Sell Multiplier"
  lore:
    - ""
    - "&fGives everyone online a"
    - "&a1.5x Sell Multiplier"
    - "&fto make money faster!"
    - ""
    - "&fDuration: &a1 Hour"
    - ""
    - "&fYou have: &a%amount%"
    - "&fGet more at &astore.ecomc.net"
    - ""
    - "&e&oClick to activate!"
    - ""
  position:
    row: 2
    column: 2
```

## Understanding all the sections

### The Booster Info Section
```yaml
name: "2x Sell Multiplier" # The display name of the Booster.
duration: 72000 # The duration (in ticks) of the Booster. (e.g. 6000 = 5 minutes)
```

### The Activation, Increment and Expiry Section
```yaml
# Effects to be run when the Booster is activated (applies to all players)
# %activator% - The player who activated the booster
# %player% - The player receiving the message/effect
activation-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " %activator%&f has activated a &a1.5x Sell Multiplier Booster&f!"
        - " &fThis booster will last an hour, be sure to thank them!"
        - ""

# Effects to be run when the Booster is incremented (applies to all players)
increment-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " %activator%&f has increased the &a1.5x Sell Multiplier Booster's duration&f!"
        - " &fThis booster will last another hour, be sure to thank them!"
        - ""

# Effects to be run when the Booster expires (applies to all players)
expiry-effects:
  - id: send_message
    args:
      action_bar: false
      messages:
        - ""
        - " &fThe &a1.5x Sell Multiplier Booster&f has ended"
        - " &fGet another one here: &ahttps://store.ecomc.net/package/756887"
        - ""
```

The effects section is the core functionality of the booster. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the booster is active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.


### The Booster GUI Section
```yaml
gui:
  item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjBhN2I5NGM0ZTU4MWI2OTkxNTlkNDg4NDZlYzA5MTM5MjUwNjIzN2M4OWE5N2M5MzI0OGEwZDhhYmM5MTZkNSJ9fX0= # The GUI item: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "&d2x Sell Multiplier" # The name of the Booster in the GUI.
  lore: # The lore of the Booster in the GUI.
    - ""
    - "&fGives everyone online a"
    - "&a2x Sell Multiplier"
    - "&fto make money faster!"
    - ""
    - "&fDuration: &a1 Hour"
    - ""
    - "&fYou have: &a%amount%"
    - "&fGet more at &astore.ecomc.net"
    - ""
    - "&e&oClick to activate!"
    - ""
  position:
    row: 2 # 1-6
    column: 5 # 1-9
```

### The Effects Section
```yaml
# The effects whilst the Booster is active (i.e. the functionality)
effects:
  - id: sell_multiplier
    args:
      multiplier: 2

# The conditions required for the effects to activate
conditions: [ ]
```
The effects section is the core functionality of the booster. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the booster is active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

## Internal Placeholders

| Placeholder   | Value                                                      |
|---------------|------------------------------------------------------------|
| `%amount%`    | The amount of the booster the player has (For use in GUI)  |
| `%activator%` | The player who activated the booster (For use in messages) |


<hr/>

## Default Configs

The default configs can be found [here](https://github.com/Auxilor/Boosters/tree/master/eco-core/core-plugin/src/main/resources/boosters). <br/>
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).