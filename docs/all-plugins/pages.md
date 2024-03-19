---
title: GUI Pages
sidebar_position: 7
---

## Custom Pages
Custom pages are used in most of the plugins, and understanding how to correctly configure a GUI page is important to creating your menus.

## How to make a page

Pages consist of three key components, a mask, a pattern, and sometimes a page number. A pattern is the layout of the background or filler items. Think of the pattern section as the GUI, with 9 columns and up to 6 rows. 

Patterns use a simple format:
`0` is an empty slot.
`1-9` are the first nine different filler items
`a-z` is the remaining 26 items.
In total you could display 35 different items as "filler" items in your GUI.

A mask is the items to be shown in the pattern layout, these work from the top down. You can use the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) here to add custom items, apply names or any other of the options.
The first item in the list will represent `1` in the pattern, the second item in the list is `2`, etc..

## Example Page Config

```yaml
    - page: 1
      mask:
        items: # The order of items to display
          - gray_stained_glass_pane # The 1st Item
          - black_stained_glass_pane # The 2nd Item
        pattern: 
          - "222222222"
          - "211111112"
          - "222222222"
```

This example has a surrounding layer of `gray_stained_glass_pane` and a center strip of `black_stained_glass_pane`.

![Page](https://i.imgur.com/tQLXe3F.png)