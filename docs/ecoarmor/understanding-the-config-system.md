---
title: "Understanding the config system"
sidebar_position: 3
---

## Default Config

The default ecoarmor.yml (Sets and Tiers) can be found here:

[ecoarmor.yml](https://github.com/Auxilor/EcoArmor/blob/master/eco-core/core-plugin/src/main/resources/ecoarmor.yml)

## Breakdown of ecoarmor.yml

ecoarmor.yml is where the configs for all sets and tiers are. It may initially seem daunting however it is very easy to configure and make your own sets and tiers.

Simply, ecoarmor.yml looks like this:

```yaml
sets:
  - <set 1>
  - <set 2>
tiers:
  - <tier 1>
  - <tier 2>
```

There are two arrays of objects, one being all the tiers, and another being all the sets. You can add and remove sets and tiers by creating and removing elements from the array.