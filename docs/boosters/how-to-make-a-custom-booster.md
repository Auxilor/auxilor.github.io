---
title: "How to make a custom booster"
sidebar_position: 1
---

## Default Configs

The default configs can be found [here](https://github.com/Auxilor/Boosters/tree/master/eco-core/core-plugin/src/main/resources/boosters).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add boosters
Each booster has its own config file, placed in the `/boosters/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the booster is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

### Example Booster Config

```yaml
name: "2x Sell Multiplier" # The display name of the Booster.
duration: 72000 # The duration (in ticks) of the Booster. (e.g. 6000 = 5 minutes)

# The effects whilst the Booster is active (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: sell_multiplier
    args:
      multiplier: 2
      
# The conditions required for the effects to activate
conditions: [ ]

commands:
  activation: [ ] # Commands to run when the booster is activated.
  expiry: [ ] # Commands to run when the booster expires.
  
messages:
  activation: # Broadcast message when the booster is activated.
    - ""
    - " %player%&f has activated a &a2x Sell Multiplier Booster&f!"
    - " &fThis booster will last an hour, be sure to thank them!"
    - ""
  expiry: # Broadcast message when the booster expires.
    - ""
    - " &fThe &a2x Sell Multiplier Booster&f has ended"
    - " &fGet another one here: &ahttps://store.ecomc.net/package/756888"
    - ""
    - 
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

## Understanding all the sections

**name:** The name of the booster.

**duration:** The duration of the Booster (in ticks).

**commands:** Commands to be run when the Booster is activated or expires.

**messages:** Broadcast messages to be sent when the Booster is activated or expires.

#### GUI

**item:** The item shown in the `/boosters` GUI, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The name shown in the `/boosters` GUI.

**lore:** The lore shown in the `/boosters` GUI.

**position:** The position in the `/boosters` GUI.

### Effects & Conditions

The effects section is the core functionality of the Booster. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the booster is active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

## Internal Placeholders

| Placeholder | Value                                    |
| ----------- | ---------------------------------------- |
| `%amount%`  | The amount of the booster the player has |
