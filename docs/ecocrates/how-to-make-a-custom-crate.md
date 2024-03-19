---
title: How to make a Crate
sidebar_position: 1
---

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoCrates/tree/master/eco-core/core-plugin/src/main/resources/crates).

## How to add crates
Each crate is its own config file, placed in the `/mobs/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the crate is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Crate Config

```yaml
name: "Demo Crate" # The display name of the crate
roll: csgo # The opening style, check here: https://plugins.auxilor.io/ecocrates/animations-rolls
can-reroll: true # If once you win a reward, you can choose to reroll

preview: # The preview GUI, when left-clicking a crate or using /crates preview
  title: Demo Crate # The GUI title
  rows: 6 # The amount of rows for the gui, between 1 and 6
  forwards-arrow: # The arrow for switching between pages. If on the last page, this will not show up.
    item: arrow name:"&fNext Page"
    row: 6
    column: 6
  backwards-arrow: # The arrow for switching between pages. If on the first page, this will not show up.
    item: arrow name:"&fPrevious Page"
    row: 6
    column: 4
  pages: # All the pages in the preview GUI. You can add as many pages as you want.
    - page: 1
      mask: # Filler items for decoration
        items: # Add as many items as you want
          - gray_stained_glass_pane # Item 1
          - black_stained_glass_pane # Item 2
        pattern:
          - "222222222"
          - "211111112"
          - "211011112"
          - "211110112"
          - "211111112"
          - "222222222"
      rewards: # Where to put rewards in the GUI
        - id: diamond_sword # The reward ID
          row: 3 # The row
          column: 4 # The column
        - id: stack_of_emeralds
          row: 4
          column: 6
    - page: 2
      mask: # Filler items for decoration
        items: # Add as many items as you want
          - gray_stained_glass_pane # Item 1
          - black_stained_glass_pane # Item 2
        pattern:
          - "222222222"
          - "211111112"
          - "211110112"
          - "211011112"
          - "211111112"
          - "222222222"
      rewards: # Where to put rewards in the GUI
        - id: bedrock
          row: 3
          column: 6
        - id: 1000_coins
          row: 4
          column: 4

key: # The physical key to be given to players
  item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Crate Key" # The item
  lore: # Lore for the key to have
    - "&fUse this key to open"
    - "&fthe <g:#56ab2f>Demo Crate</g:#a8e063>"
  use-custom-item: false # Set this to true in order to use a custom item as the key;
  # For example making all ecoitems:blue_shards function as keys. This will prevent lore from being applied.

keygui: # Options for showing up in /crate keys
  enabled: true # If the crate should be in the key gui
  item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate" # The item in the gui
  lore: # The GUI lore
    - "<g:#56ab2f>Demo Crate</g:#a8e063>"
    - "&fYou have %keys% keys"
    - "&fGet more at &astore.example.net"
  row: 2 # The position in the gui
  column: 3
  right-click-previews: true # If right click opens the preview
  left-click-opens: true # If left click open the crate virtually
  shift-left-click-messsage: # The messages to send on shift-left-click
    - "Buy a Demo Crate key here! &astore.example.net"

pay-to-open: # If people can pay to open if they have no keys
  enabled: false # If it should be allowed
  price: 5000 # The price to buy the crate

placed: # Options for physically placed crates
  random-reward: # The random reward hologram, shows an item
    enabled: true # If the random reward should be shown
    height: 1.5 # The height above the crate at which to show the reward
    delay: 30 # The ticks between showing a new item
    name: "&fYou could win:" # The text above the item
  particles: # The particle effects around the crate, add as many as you want
    - particle: flame # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html
      animation: spiral # spiral, double_spiral, circle, or twirl
  hologram: # The text hologram, requires a hologram plugin to be installed
    height: 1.5 # The height above the crate
    ticks: 200 # The total ticks to cycle all frames
    frames:
      - tick: 0 # The starting tick to show this frame
        lines:
          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"
          - "&b&lLeft Click to Preview"
          - '&a&lRight click to Open'
      - tick: 100
        lines:
          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"
          - "&a&lLeft Click to Preview"
          - '&b&lRight click to Open'

open: # Effects when opening the crate, before rewards are given - right when the player clicks
  messages: # The messages to send the player
    - "Good luck!"
  broadcasts: # The messages to send to everyone
    - "%player%&f is opening the Demo Crate!"
  commands: [ ] # Commands to execute, use %player% as a placeholder
  sounds: # The sounds to play
    - sound: entity_villager_yes # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
      volume: 10 # Essentially the distance at which the sound should be heard
      pitch: 1 # Between 0.5 and 2

finish: # Effects once the crate rewards have been given
  messages: # The messages to send the player
    - "You won %reward%&f!"
  broadcasts: # The messages to send to everyone
    - "%player%&f won %reward%&f from the Demo Crate!"
  commands: [ ] # Commands to execute, use %player% as a placeholder
  fireworks: # The fireworks to launch, add as many as you want
    - power: 2 # The duration of the firework, set to 0 for instant explosion
      type: ball_large # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html
      colors: # Any hex colors
        - 00ffff
        - 00ff00
      fade-colors: # Any hex colors
        - ffffff
        - 999999
      trail: true
      flicker: true
  sounds: # The sounds to play, ad ass many as you want
    - sound: entity_generic_explode # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
      volume: 10 # Essentially the distance at which the sound should be heard
      pitch: 1 # Between 0.5 and 2

rewards: # The rewards to give, configure in rewards.yml
  - diamond_sword
  - stack_of_emeralds
  - bedrock
  - 1000_coin
```

## Understanding all the sections

**name:** The name of the crate, shown to the player.

**roll:** The [Roll](https://plugins.auxilor.io/ecocrates/animationsandrolls#list-of-rolls) type for this crate

**can-reroll:** Enable/disable reroll feature for this crate.
### Preview

```yaml
preview:
  title: Demo Crate
  rows: 6
  forwards-arrow:
    item: arrow name:"&fNext Page"
    row: 6
    column: 6
  backwards-arrow:
    item: arrow name:"&fPrevious Page"
    row: 6
    column: 4
  pages:
    - page: 1
      mask:
        items:
          - gray_stained_glass_pane
          - black_stained_glass_pane
        pattern:
          - "222222222"
          - "211111112"
          - "211011112"
          - "211110112"
          - "211111112"
          - "222222222"
      rewards:
        - id: diamond_sword # The reward ID
          row: 3
          column: 4
        - id: stack_of_emeralds
          row: 4
          column: 6
```

**title:** The title of preview GUI.

**rows:** The amount of rows in the preview GUI (1-6).
##### Pages

To configure a pattern and mask, read here for more info: [Pages](https://plugins.auxilor.io/all-plugins/pages)
##### Rewards
Where you set where crate rewards are placed in the preview GUI.

**id:** The ID of a [Reward](https://plugins.auxilor.io/ecocrates/rewards).

**row/column:** The location of this item in the crate
### Key

```yaml
key:
  item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Crate Key"
  lore:
    - "&fUse this key to open"
    - "&fthe <g:#56ab2f>Demo Crate</g:#a8e063>"
  use-custom-item: false
```

**item:** This is the item shown in the GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**is-custom-item** If the key should be the exact item provided, rather than using it as a base for it's own key item - enable this to have custom items as your keys, for example `ecoitems:fuschium_shard` would be the key, so **all** Fuschium Shards would open the crate.

### Key GUI

```yaml
keygui:
  enabled: true
  item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate"
  lore:
    - "<g:#56ab2f>Demo Crate</g:#a8e063>"
    - "&fYou have %keys% keys"
    - "&fGet more at &astore.example.net"
  row: 2
  column: 3
  right-click-previews: true
  left-click-opens: true
  shift-left-click-messsage:
    - "Buy a Demo Crate key here! &astore.example.net"
```

**enabled:** If the crate should be in [/crate keys](https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys) (true/false).

**item:** This is the item shown in the GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**row/column:** The location of this item in the GUI.

**right-click-previews:** If right click opens up crate preview (true/false).

**left-click-opens:** If left click should open the crate (true/false).

**shift-left-click-message:** A message to be sent on shift-left-click.

### Pay To Open

**enabled:** Enable/Disable pay-to-open feature for this crate (true/false).

**price:** The price to open this crate (works only if enabled: is set to true).

### Placed

```yaml
placed:
  random-reward:
    enabled: true
    height: 1.5
    delay: 30
    name: "&fYou could win:"
  particles:
    - particle: flame
      animation: spiral
  hologram:
    height: 1.5
    ticks: 200
    frames:
      - tick: 0
        lines:
          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"
          - "&b&lLeft Click to Preview"
          - '&a&lRight click to Open'
      - tick: 100
        lines:
          - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"
          - "&a&lLeft Click to Preview"
          - '&b&lRight click to Open'
```
#### random-reward

**enabled:** If a random item shows in the hologram.

**height:** The height above the crate to show the rewards.

**delay:** The ticks between changing the displayed item.

**name:** The text shown above the display item.
#### particles

**particle:** The particle, read here for more info: [Particles](https://plugins.auxilor.io/all-plugins/the-particle-lookup-system).

**animation:** The particle animation (`spiral`, `double_spiral`, `circle`, or `twirl`).

#### hologram

**height:** The Y offset for the hologram from the crate block.

**ticks:** The total ticks in the hologram animation.
##### frames

**tick:** The starting tick for this frame to be shown.

**lines:** A list of hologram text lines on this frame.

### Opening/Finish opening crate effects config

```yaml
open:
    messages:
      - "Good luck!"
    broadcasts:
      - "%player%&f is opening the Demo Crate!"
    commands: [ ]
    sounds:
      - sound: entity_villager_yes
        volume: 10
        pitch: 1 

finish:
    messages:
      - "You won %reward%&f!"
    broadcasts:
      - "%player%&f won %reward%&f from the Demo Crate!"
    commands: [ ]
    fireworks:
      - power: 2
        type: ball_large
          - 00ffff
          - 00ff00
        fade-colors:
          - ffffff
          - 999999
        trail: true
        flicker: true
    sounds:
      - sound: entity_generic_explode
        volume: 10 
        pitch: 1
```

**messages:** A list of messages sent to the player when he starts/finishes opening the crate.

**broadcasts:** A list of messages sent to the whole server when a player starts/finishes opening the crate.

**commands:** A list of commands to be executed when a player starts/finishes opening the crate (%player% for a player name)
#### Fireworks:

**power:** The duration of the firework, set to 0 for instant explosion.

**type:** The [Firework Effect Type](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html).

**colors:** A list of the firework colors (any HEX color of `#ffffff` format).

**fade-colors:** A list of the firework fade colors (any HEX color of `#ffffff` format).

**trail** Enable/Disable the trail for this firework (true/false).

**flicker** Enable/Disable the flicker for this firework (true/false).

#### Sounds

**sound:** The [Sound Name](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html).

**volume:** Essentially the distance at which the sound should be heard.

**pitch:** The pitch for that sound (between 0.5 and 2).

### Rewards
A list of rewards winnable in the crate.

```yaml
rewards:
  - diamond_sword
```
## Internal Placeholders

| Placeholder | Value                                                     |
| ----------- | --------------------------------------------------------- |
| `%keys%`    | The amount of virtual keys for this crate the player has. |
| `%reward%`  | The display name of the reward.                           |
| `%player%`  | The player who won the reward.                            |

