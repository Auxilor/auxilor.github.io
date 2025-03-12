---
title: How to make a Currency
sidebar_position: 1
---

## Default configs

The default configs can be found [here](https://github.com/Auxilor/EcoBits/blob/master/eco-core/core-plugin/src/main/resources/config.yml).

## How to add currencies

EcoBits lets you make as many currencies as you want, and you make each one by adding a new entry to the `currencies` list. Simply add and remove currencies as you please.

> [!example]
> ```yaml
> currencies:
>     - id: crystals # The ID of the currency.
>       name: "&bCrystals ❖" # The name of the currency.
>       default: 0 # The default balance.
>       max: -1 # The maximum balance, set to -1 if no max.
>       payable: false # If players should be able to use /ecobits pay to pay other players
>       decimal: true # If decimal amounts are allowed rather than just integer amounts
>       vault: false # If this currency should be registered with vault
>       local: false # If this currency should not sync between servers
>       commands: # A list of commands dedicated to this currency (for easier paying, checking balance, etc)
>           - crystals
>           - ecocrystals
> ```

## Understanding all the sections

**id:** The ID of the currency. This is what you use in commands, [[prices]] and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

**name:** The name of the currency.

**default:** The default balance

**max:** The maximum balance, set to -1 if no max.

**payable:** If players should be able to use /ecobits pay to pay other players

**decimal:**  If decimal amounts are allowed

**vault:** If this currency should be registered with Vault

**local:** If this currency should not sync between servers

**commands:** A list of commands for this currency (for paying, balance, etc.)

## Using EcoBits currencies

You can use your EcoBits anywhere within effects using the [Price](https://plugins.auxilor.io/all-plugins/prices) system.
By setting your EcoBits currency as your Vault currency you can use your currency in other plugins too. Other plugins can also interact with EcoBits using the [placeholders](https://plugins.auxilor.io/ecobits/placeholderapi) and [commands](https://plugins.auxilor.io/ecobits/commands-and-permissions).