---
title: Custom GUI Slots
sidebar_position: 7
---

## What are custom GUI slots?

When configuring a GUI in a plugin, you might stumble accross this:

```yaml
# Custom GUI slots; see here for a how-to: https://plugins.auxilor.io/all-plugins/custom-gui-slots
custom-slots: []
```

This means you can add custom items (with commands) to your GUIs for that extra layer of customisability.

## How to make a custom GUI slot

Quite simply, a GUI slot looks like this:

```yaml
custom-slots:
  - row: 6 
    column: 9
    item: ecoitems:skill_gui_item 
    lore: []
    left-click:
      - console:op %player% # Commands can start with console: to be ran by console, and use %player% as a placeholder.
      - spawn # If you don't specify, then the command will be ran by the player.
    right-click: []
    shift-left-click: []
    shift-right-click: []
```

If you have no right click / shift left click / etc commands to add, you can omit the sections, like this:

```yaml
custom-slots:
  - row: 1
    column: 5
    item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODU3MDVjZjg2NGRmMmMxODJlMzJjNDg2YjcxNDdjYmY3ODJhMGFhM2RmOGE2ZDYxNDUzOTM5MGJmODRmYjE1ZCJ9fX0=
    right-click:
      - console:eco give %player% 1000
```

And you can add as many custom slots as you want, like this:

```yaml
custom-slots:
  - <slot 1>
  - <slot 2>
  - <slot 3>
  - ...etc
  ```
