---
title: "How to make a custom booster"
sidebar_position: 2
---

## Default config

The default boosters.yml can be found here: 

[boosters.yml](https://github.com/Auxilor/Boosters/blob/master/eco-core/core-plugin/src/main/resources/boosters.yml)

## Breakdown of boosters.yml

boosters.yml is where the configs for all boosters are. It may initially seem daunting however it is very easy to configure and make your own boosters.

Simply, boosters.yml looks like this:

```yaml
boosters:
  - <booster 1>
  - <booster 2>
```

It's a big array of objects, each element in the list being a booster. You can add and remove boosters by creating and removing elements from the list.

## Typical Booster Config

```yaml
- id: 2sell_multiplier
  name: "2x Sell Multiplier"
  duration: 72000
  effects:
    - id: sell_multiplier
      args:
        multiplier: 2
  conditions: []
  commands:
    activation: []
    expiry: []
  messages:
    activation:
      - ""
      - " %player%&f has activated a &a2x Sell Multiplier Booster&f!"
      - " &fThis booster will last an hour, be sure to thank them!"
      - ""
    expiry:
      - ""
      - " &fThe &a2x Sell Multiplier Booster&f has ended"
      - " &fGet another one here: &ahttps://store.ecomc.net/package/756888"
      - ""
  gui:
    item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjBhN2I5NGM0ZTU4MWI2OTkxNTlkNDg4NDZlYzA5MTM5MjUwNjIzN2M4OWE5N2M5MzI0OGEwZDhhYmM5MTZkNSJ9fX0=
    name: "&d2x Sell Multiplier"
    lore:
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
      row: 2
      column: 5
```

## Understanding all the sections

**id:** The ID of the booster. This is what you use in commands - ID's must be lowercase letters, numbers, and underscores only.

**name:** The name of the booster, shown to the player.

**duration:** How long the booster lasts for, in ticks: 72000 ticks is 1 hour

**commands:** The commands that will be dispatched when a booster activates/deactivates. You can use %player% as a placeholder.

**messages:** The messages that are broadcast when a reforge activates/deactivates. You can use %player% as a placeholder.

**gui:** Config for how the booster looks in gui: the item, the lore, the name, et cetera.

### Effects + Conditions

Effects are the actual functionality of the booster, and conditions are requirements that a player must meet for the booster to activate for them - so you can make it so a booster only works for a certain type of player, ie only players that have above a certain amount of playtime, or those that only have below a certain balance.

See this page for how to configure effects:

[Configuring an Effect](https://plugins.auxilor.io/all-plugins/configuring-an-effect)
