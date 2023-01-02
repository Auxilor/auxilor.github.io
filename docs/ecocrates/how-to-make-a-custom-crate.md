---
title: "How to make a custom crate"
sidebar_position: 2
---
## Default config

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoCrates/blob/master/eco-core/core-plugin/src/main/resources/crates/)

## How to add crates
Crates are each config files placed in the `/crates/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Typical Crate Config

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

**id:** The ID of the crate. This is what you use in commands - ID's must be lowercase letters, numbers, and underscores only.

**name:** The name of the booster, shown to the player.

**roll:** The [Roll](https://plugins.auxilor.io/ecocrates/animationsandrolls#list-of-rolls) type for this crate

**can-reroll:** Enable/disable reroll feature for this crate.

**preview:** Config for the preview GUI of this crate.

**key:** Config for the key item of this crate.

&nbsp;&nbsp;**item:** The [Items Lookup](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) string for the key item.

&nbsp;&nbsp;**lore:** The lore of a key item.

&nbsp;&nbsp;**is-custom-item** If the key should be the exact item provided, rather than using it as a base for it's own key item - enable this to have custom items as your keys, for example ecoitems:fuschium_shard would be the key, so all Fuschium Shards would open the crate

**keygui:** Config for the [/crate keys](https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys) appearance of this crate.

**pay-to-open:** Config for opening this crate for money.

&nbsp;&nbsp;**enabled:** Enable/Disable pay-to-open feature for this crate (true/false).
&nbsp;&nbsp;**price:** The price to open this crate (works only if enabled: is set to true).

**placed:** Config for the placed version of this crate.

**open:** Config for the actions on crate open.

**finish:** Config for the actions on crate finish opening.

**rewards:** A list of [Rewards](https://plugins.auxilor.io/ecocrates/rewards) that this crate should give.

## Preview Config

```yaml
preview: # The preview GUI, when left-clicking a crate or using /crates preview
    title: Demo Crate # The GUI title
    rows: 6 # The amount of rows for the gui, between 1 and 6
    mask: # Filler items for decoration
      items: # Add as many items as you want
        - gray_stained_glass_pane # Item 1
        - black_stained_glass_pane # Item 2
      pattern:
        - "222222222"
        - "211010112"
        - "201010102"
        - "201010102"
        - "201111102"
        - "222222222"
    rewards: # Where to put rewards in the GUI
      - id: diamond_sword # The reward ID
        row: 3 # The row
        column: 2 # The column
      - id: stack_of_emeralds
        row: 4
        column: 2
      - id: bedrock
        row: 3
        column: 2
      - id: 1000_coins
        row: 5
        column: 2
```

**title:** The title of preview GUI.

**rows:** The amount of rows in the preview GUI (1-6).

**mask:** The section of a GUI mask.

**items:** A list if [Items Lookup](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) strings.

**pattern:** A numeric pattern, where each number refferes to the item from the items section (0 for air).

**rewards:** A place where you set where crate rewards are placed in the preview GUI.

**id:** The id of a [Reward](https://plugins.auxilor.io/ecocrates/rewards).

**row:** The row of the GUI.

**column:** The column of the GUI.

## Key GUI config

```yaml
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
```

**enabled:** Enable/Disable showing this crate in [/crate keys](https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys) (true/false)

**item:** The [Items Lookup](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) string for the GUI item.

**lore:** The lore of the GUI item.

**row:** The row position in the GUI.

**column:** The row column in the GUI.

**right-click-previews:** If right-clicking the item in the key GUI should open this crate preview (true/false).

**left-click-opens:** If left-clicking the item in the key GUI should open this crate virtually (true/false).

**shift-left-click-messsage:** A list of messages sent to the player when he shift-left-clicks the item in the key GUI.

## Placed Crate config

```yaml
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
```

**random-reward:** Options for a random reward appearing above the placed physical crate.

&nbsp;&nbsp;**enabled:** Enable/Disable random reward displaying for this crate (true/false).

&nbsp;&nbsp;**height:** The Y offset for the reward item from the crate block.

&nbsp;&nbsp;**delay:** Ticks between changing the displayed reward.

&nbsp;&nbsp;**name:** The text displayed above the random reward item.

**particles:** A list o particle effects around the placed crate.

&nbsp;&nbsp;**particle:** The [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) name.

&nbsp;&nbsp;**animation:** The Animation name (spiral, double_spiral, circle, or twirl).

**hologram:** The text hologram above the crate. Requires a [Hologram](https://plugins.auxilor.io/all-plugins/what-plugins-do-you-support#hologram) plugin to be installed.

&nbsp;&nbsp;**height:** The Y offset for the hologram from the crate block.

&nbsp;&nbsp;**ticks:** The total ticks in the hologram animation.

&nbsp;&nbsp;**frames:** A list of frames for the hologram animation.

&nbsp;&nbsp;&nbsp;&nbsp;**tick:** The starting tick for this frame to be shown.

&nbsp;&nbsp;&nbsp;&nbsp;**lines:** A list of hologram text lines on this frame.

## Opening/Finish opening crate effects config

```yaml
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
```

**messages:** A list of messages sent to the player when he starts/finishes opening the crate.

**broadcasts:** A list of messages sent to the whole server when a player starts/finishes opening the crate.

**commands:** A list of commands to be executed when a player starts/finishes opening the crate (%player% for a player name)

**fireworks:** A list of fireworks to be launched when a player finishes opening the crate.

&nbsp;&nbsp;**power:** The duration of the firework, set to 0 for instant explosion.

&nbsp;&nbsp;**type:** The [Firework Effect Type](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html).

&nbsp;&nbsp;**colors:** A list of the firework colors (any HEX color of ffffff format).

&nbsp;&nbsp;**fade-colors:** A list of the firework fade colors (any HEX color of ffffff format).

&nbsp;&nbsp;**trail** Enable/Disable the trail for this firework (true/false).

&nbsp;&nbsp;**flicker** Enable/Disable the flicker for this firework (true/false).

**sounds:** A list of sounds to be played when a player starts/finishes opening the crate.

&nbsp;&nbsp;**sound:** The [Sound Name](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html).

&nbsp;&nbsp;**volume:** Essentially the distance at which the sound should be heard.

&nbsp;&nbsp;**pitch:** The pitch for that sound (between 0.5 and 2).
