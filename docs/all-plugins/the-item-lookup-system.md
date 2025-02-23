---
title: The Item Lookup System
sidebar_position: 3
---

## What is the Item Lookup System?

The item lookup system is how items are loaded from configs. It's designed to be extremely flexible and intuitive, allowing you to use custom items, stacks, enchantments, etc. wherever you want, without having to worry about what plugin they're from.

## Crafting Recipes

Crafting recipes in eco plugins often look something like this:

```yaml
recipe:
  - ""
  - "ecoitems:toughened_string 8 ? string 64"
  - ""

  - ""
  - "netherite_chestplate || diamond_chestplate"
  - ""

  - "ecoitems:arachnid_oculus ? nether_star 2"
  - ""
  - "ecoitems:arachnid_oculus ? nether_star 2"
```

While it may look meaningless, this system is straightforward once you understand how it works. A crafting recipe is written as a list of 9 strings, the first three being the top row (left to right),
the second three being the middle row (left to right), and the last three being the last row (left to right).

## Keys Explained

In each string is the key for an item. A key looks one of a few ways

- A vanilla minecraft material ID: (e.g. `golden_apple`)
- An item from another plugin: (e.g. `ecoitems:packmaster_tear`)
- An exact item NBT tag: (e.g. `{id:"stone",Count:3,tag:{Name:"your name"}}`)
- An item tag: (e.g. `#talismans:talisman` or `#items_axes`)

### Vanilla Materials

By default, a vanilla material (e.g. `diamond_pickaxe`) will not accept custom items with the same material. For example, if you have an EcoItems item with `diamond_pickaxe` as its base material,
then that item will not be recognised as a `diamond_pickaxe`.

If you want custom items to be accepted, place a `*` at the start, so `"diamond_pickaxe"` becomes `"*diamond_pickaxe"`. Outside of crafting recipes, most plugins use `*` items in their
default configs for performance reasons.

### Item Tags

Item tags are groups of items. A list of vanilla tags can be found [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Tag.html), and you can use them with `#tag`, e.g. `#signs`. These are especially useful in filters and recipes where you may use the same lists of items in different places.

You can create your own tags in [tags.yml](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#item-tags) too, use `libreforge:#<tag_id>` to reference these.
```yaml
tags:
  - id: example_tag # The ID, used in the item-lookup-system.
    items: # The item's contained in the tag.
      - "netherite_sword"
      - "diamond_sword"
```

A list of custom item tags can be found later in this page.

#### Extra syntax

- `?` between two items means 'try to use the first item, but if it doesn't exist, use the second item'. You can chain these together.
- `||` groups two items, allowing either one of them to be used. You can chain these together.
- You can specify stack size, e.g. `string 64` would mean a full stack of string.

When using exact item NBT, you can't use `?`. `||`, or other modifiers.

## Modifiers

Items can  have modifiers applied to them. For example, lets say you're configuring the GUI for EcoSkills. You want it to be a player head with a texture, but you're not sure how to do that, because it looks like you have to just specify a material. Actually, in all eco plugins, wherever it asks for a material, it's actually doing a lookup. You can specify any of the following modifiers to it:

- **Enchantments:** You can specify an enchantment with `<enchantment>:<level>`
- **Skull Texture:** If the material is a player head, you can specify the texture with `texture:<base64>`. A list of skulls and textures can be found [here](https://minecraft-heads.com/).
- **Player Head:** If the material is a player head, you can specify a player using `head:<name>`. You can also use placeholders, e.g. `head:%player%`
- **Reforge:** You can specify the reforge by adding `reforge:<id>` to the key.
- **Name:** You can specify the display name of an item with `name:<name>`. You can have multiple words by surrounding the name with quotes: `name:"Long Name"`
- **Item Flags:** You can specify flags for the item to have, by dropping in any of [these values](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html) (not case sensitive)
- **Unbreakable:** You can make an item unbreakable by having the word `unbreakable` in the flags
- **Custom Model Data:** You can specify custom model data with `custom_model_data:<id>`
- **Spawner Entity:** You can specify the spawner entity with `entity:<id>`
- **Leather Armor Color:** You can specify the leather armor color with `color:#hex`, e.g. `color:#303030`

These modifiers are only available on **Paper 1.21+**:

- **Armor Trims:** You can specify armor trims with `trim:<material>:<pattern>`, e.g. `trim:emerald:snout`
- **Fire Resistance:** You can make an item fire resistant with `fire_resistant`
- **Enchantment Glint:** You can give an enchantment glint with `glint`
- **Item Name:** You can set the item name (different to display name) with `item_name:<name>`
- **Durability:** You can set the item durability with `max_damage:<durability>`
- **Stack Size:** You can set the max stack size with `max_stack_size:<size>`

So, lets say you have an EcoMobs mob, and you want it to drop a rare custom weapon with extra modifiers already applied. Without the Item Lookup system, this wouldn't be possible, but thanks to it, you can just do this: `ecoitems:enlightened_blade razor:4 unbreaking:3 criticals:2 fire_aspect:2 reforge:mighty unbreakable hide_attributes custom_model_data:2`

## Using items in eco plugins

| Plugin       | Item Lookup Key                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| EcoArmor     | `ecoarmor:set_<set>_<slot>` (Optional: `_advanced`) <br/>`ecoarmor:shard_<set>`<br/>`ecoarmor:upgrade_crystal_<id>` |
| EcoCrates    | `ecocrates:<crate>_key`                                                                                             |
| EcoItems     | `ecoitems:<id>`                                                                                                     |
| EcoMobs      | `ecomobs:<id>_spawn_egg`                                                                                            |
| EcoPets      | `ecopets:<id>_spawn_egg`                                                                                            |
| EcoScrolls   | `ecoscrolls:scroll_<id>`                                                                                            |
| Reforges     | `reforges:stone_<id>`                                                                                               |
| StatTrackers | `stattrackers:<id>`                                                                                                 |
| Talismans    | `talismans:<id>`                                                                                                    |

## Using item tags in eco plugins

| Plugin     | Item Tag              | Description                     |
| ---------- | --------------------- | ------------------------------- |
| EcoItems   | `#ecoitems:item`      | Any EcoItems item               |
| EcoScrolls | `#ecoscrolls:scroll`  | Any EcoScrolls scroll           |
| Reforges   | `#reforges:stone`     | Any reforge stone               |
| Reforges   | `#reforges:reforged`  | Any item with a reforge present |
| Talismans  | `#talismans:talisman` | Any talisman                    |

## Using items in MythicMobs

If you want to use a lookup item in MythicMobs, just do it like this: `eco{type=<lookup_key>}`, e.g. `eco{type=ecoitems:<id>}`

## Using items in ShopGUIPlus

If you want to use a lookup item in ShopGUIPlus, just do it like this:

```yaml
type: item
item:
  eco: "ecoitems:holy_flesh"
  quantity: 1
sellPrice: 7500
slot: 27
```

## Using items from third-party plugins

Sometimes custom item IDs are namespaced. In order to make this work, you have to specify them like `plugin:namespace__key`, where **two underscores** denote where the `:` would normally go.

| Plugin     | Item Lookup Key                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemsAdder | `itemsadder:<namespace>__<key>`, example below.                                                                                                      |
| Oraxen     | `oraxen:<id>`, eg: `oraxen:alumite_pickaxe`                                                                                                          |
| ItemBridge | `itembridge:saved__<id>` for items you've saved within ItemBridge. You can use `itembridge:<prefix>__<id>` for plugin items supported in ItemBridge. |

### ItemsAdder

```yaml
# ItemsAdder configuration
info:
  namespace: my_items
items:
  my_helmet:
    display_name: "&9Custom Helmet"
```

ItemsAdder items are namespaced, so for example, the above would be `itemsadder:crystal_pack__alumite_pickaxe`, where `crystal_pack` is the namespace, and `alumite_pickaxe` is the item ID.