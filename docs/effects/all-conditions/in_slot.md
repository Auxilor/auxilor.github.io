# `in_slot`

Requires the item (e.g. the EcoItem, enchanted item, reforged item) to be in a certain slot.

This is useful if you want one holder to have different effects depending on the slot it is in.

The options for slot are mainhand, offhand, hands, helmet, chestplate,
leggings, boots, armor, any, or a number from 0-40 (to specify an exact slot).

# Example Configs
```yaml
- id: in_slot
  args:
    slot: mainhand # The slot
```

```yaml
- id: in_slot
  args:
    slots: # You can also provide a list of slots
      - mainhand
      - 6
      - helmet
```
