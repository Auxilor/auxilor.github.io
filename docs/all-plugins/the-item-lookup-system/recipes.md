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

![Recipe](https://i.imgur.com/lyLo6pD.png)

:::tipInvisible Recipe Results
When using non-vanilla custom items in crafting recipes, the result may sometimes appear invisible. <br/>
Although it looks like the recipe is broken and produces no result, clicking the result slot will still give you the correct item.

To fix this, open `/plugins/eco/config.yml` and find the `enforce-preparing-recipes` option. Set it to "true", then restart your server.
:::


:::noteCreating Multiple Recipes
Creating multiple recipes for one item is not supported in the current config structure.

However, if you own EcoItems, you can easily create more custom recipes, you can read about that [here](https://plugins.auxilor.io/ecoitems/additional-configuration-options#how-to-add-additional-recipes).
:::

:::warningRecipe Book
There is a display issue where only vanilla items are shown in the recipe book, and heads use the default texture. However, the recipes still work correctly.
This is a Minecraft/Server limitation due to how custom items are handled. There were events of servers crashing and corrupting chunks when displaying custom items in recipes.

This may be fixed in a future version if possible.
:::