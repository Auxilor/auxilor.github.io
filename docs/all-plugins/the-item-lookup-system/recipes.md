---
title: Crafting Recipes
sidebar_position: 1
---
Anywhere that you configure items for players in eco plugins, you can use the Item Lookup System to add crafting recipes for them.

EcoItems also allows you to add custom crafting recipes for any lookup item, not limited to EcoItems items. This means you can add more recipes for items from other plugins, such as EcoPets or EcoScrolls, or even vanilla items, like Enchanted Golden Apples.

Crafting recipes in eco plugins are super easy to configure, and often look something like this:

```yaml
recipe:
  - "diamond"
  - "emerald"
  - "diamond"
  - ""
  - "stick"
  - ""
  - ""
  - "stick"
  - ""
  
# All recipes are shaped. We do not currently support shapeless recipes.
```

While it may look meaningless, this system is straightforward once you understand how it works. A crafting recipe is written as a list of 9 strings, the first three being the top row (left to right),
the second three being the middle row (left to right), and the last three being the last row (left to right).

The example recipe would look like this in-game:

![Recipe](https://imgur.com/a/26Z3f1R)