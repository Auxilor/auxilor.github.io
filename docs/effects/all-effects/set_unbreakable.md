# `set_unbreakable`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Sets the unbreakable tag on an item

# Effect Syntax
```yaml
- id: set_unbreakable
  args:
    value: true # True = apply unbreakable, False = remove unbreakable
    slot: holder # The slot to apply unbreakable (defaults to "holder")
    persist_on_disable: true # If the unbreakable tag should persist when unequipped or effect deactivated
```

#### Slots you can use:
- `holder`: The holder item (eg, the enchanted item, the talisman, the EcoItem, etc)
- `mainhand`: The item in the mainhand
- `offhand`: The item in the offhand
- `helmet`: The item in the head slot
- `chestplate`: The item in the chest slot
- `leggings`: The item in the legs slot
- `boots`: The item in the feet slot