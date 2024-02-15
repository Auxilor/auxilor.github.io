---
title: "How to make a category"
sidebar_position: 3
---

## What's a category?

Categories are how shops are organized. Items are sold / bought in categories, they're
the actual 'shop' part. In the example config, you will have seen how shops can either
be a portal to a bunch of categories, or alternatively just directly link to a category.

## Default config

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoShop/blob/master/eco-core/core-plugin/src/main/resources/categories/)

## How to add categories

This works just the same as adding or removing shops. Just make or remove .yml files in
the `/categories/` directory, and then reference them in the shop you want them to be in.

One category can be in as many shops as you want! EcoShop is smart, it knows what shop
you opened the category from, so any sounds / broadcasts from the shop you came from
will work even if 2 shops share the same category.

## Example Category Config

EcoShop comes with an example category config that explains everything,
[read it here](https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/categories/_example.yml)
