---
title: The Item Lookup System
sidebar_position: 3
---

## What is the Item Lookup System?
A lot of my plugins have crafting recipes in them and/or add custom items to the server. The Item Lookup system was designed to create a simple, powerful system to have custom item crafting and share items between plugins.

## Crafting Recipes
If you've ever seen a crafting recipe in a plugin of mine, there's a decent chance that it looked something like this:
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

This looks completely meaningless, but it's actually really simple. A crafting recipe is shown as a list of 9 strings, the first three being the top row (left to right), the second three being the middle row (left to right), and the last three being the last row (left to right).

## Keys Explained
In each string is the key for an item. A key looks one of three ways:
- A vanilla minecraft material: (eg `golden_apple`)
- An item from another plugin: (eg `ecoitems:packmaster_tear`)
- An exact item NBT tag: (eg `{id:"stone",Count:3,tag:{Name:"your name"}}`)

You may also have noticed the `?` in some of the items. This means 'try to use the first item, but if it doesn't exist, use the second item' You can chain these together, but they're actually only useful for me to provide integrations in default configs without breaking things for people who don't use all my plugins together.

You can also use `||` to group two items together. This means 'allow the the first item and the second item'. You can chain these together in order to allow many different items.

You can specify the amount of any item by having a space and then a number (the stack size). For example: `string 64` would mean a full stack of string.

When using exact item NBT, you can't use `?`. `||`, or other modifiers.

## Modifiers
Items can have modifiers applied to them in the key. For example, lets say you're configuring the GUI for EcoSkills. You want it to be a player head with a texture, but you're not sure how to do that, because it looks like you have to just specify a material. Actually, in all of my plugins, wherever it asks for a material, it's actually doing a lookup. You can specify any of the following modifiers to it:
- **Enchantments:** You specify an enchantment by adding `<enchantment>:<level>` to the key, and you can chain these together
- **Skull Texture:** If the material is a player head, you can specify the texture with `texture:<base64>`. A list of skulls and textures can be found [here](https://minecraft-heads.com/).
- **Reforge:** If you have reforges installed, you can specify the reforge by adding `reforge:<id>` to the key.
- **Name:** You can specify the display name of an item with `name:<name>`. You can have multiple words by surrounding the name with quotes: `name:"Long Name"`
- **Item Flags:** You can specify flags for the item to have, by dropping in any of [these values](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html) (not case sensitive) 
- **Unbreakable:** You can make an item unbreakable by having the word `unbreakable` in the flags
- **Custom Model Data:** You can specify custom model data with `custom-model-data:<id>`

So, lets say you have an EcoBosses boss, and you want it to drop a rare custom weapon with extra modifiers already applied. Without the Item Lookup system, this wouldn't be possible, but thanks to it, you can just do this: `ecoitems:enlightened_blade razor:4 unbreaking:3 criticals:2 fire_aspect:2 reforge:mighty unbreakable hide_attributes custom-model-data:2`

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

## Custom Items
Sometimes custom item IDs are namespaced. In order to make this work, you have to specify them like `itemsadder:namespace__key`, where two underscores denote where the `:` would normally go
