---
title: "How to make a Key"
sidebar_position: 2
---

Keys control access to crates. This is where you define the physical key item, optional custom-item behavior, and how the key appears in the `/keys` GUI.

## How to add keys

Each key is its own config file, placed in the `/keys/` folder, and you can add or remove them as you please. There is an example config called `_example.yml` to help you out!

The ID of the key is the file name. This is what you use in crate configs.\
ID's must be lowercase letters, numbers, and underscores only.

## Example Key Config

```yaml
item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Key"
lore:
  - "&fUse this key to open"
  - "&fdemonstration crates"

use-custom-item: false

keygui:
  enabled: true
  crate: demo_crate
  item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Key"
  lore:
    - "<g:#56ab2f>Demo Key</g:#a8e063>"
    - "&fYou have %keys% keys"
    - "&fGet more at &astore.example.net"
  row: 2
  column: 3
  right-click-previews: true
  left-click-opens: true
  shift-left-click-message:
    - "Buy a key here! &astore.example.net"
```

## Understanding the Sections

#### The Physical Key Item Section

```yaml
item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Key" # The physical key item
lore: # Lore applied to physical key items
  - "&fUse this key to open"
  - "&fdemonstration crates"
use-custom-item: false # Set to true to use an existing custom item (e.g. ecoitems:...) as the key.
                       # Lore will NOT be applied when use-custom-item is true.
```

#### The Key GUI Section

```yaml
keygui:
  enabled: true # Whether this key appears in the GUI
  crate: demo_crate # The crate to open/preview on click (defaults to the key ID if not set)
  row: 2 # Row in the GUI (1-indexed)
  column: 3 # Column in the GUI (1-indexed)
  right-click-previews: true # Right-click to open the crate preview
  left-click-opens: true # Left-click to open the crate using a virtual key
```

## Internal Placeholders

| Placeholder | Value |
| ----------- | ----- |
| `%keys%`    | The player's amount of this key type. |

<hr/>

## Default Configs
The default configs can be found [here](https://github.com/Auxilor/EcoCrates/tree/master/eco-core/core-plugin/src/main/resources/keys).


