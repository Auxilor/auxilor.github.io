---
title: "How to make a currency"
sidebar_position: 2
---

## Default config

The default configs can be found [here](https://github.com/Auxilor/EcoBits/blob/master/eco-core/core-plugin/src/main/resources/config.yml).

## How to add currencies

EcoBits lets you make as many currencies as you want, and you make each one by adding a new
entry to the `currencies` list. Simply add and remove currencies as you please.

## Example Currency Config

EcoBits comes with an example currency:

```yaml
currencies:
    - id: crystals # The ID of the currency.
      name: "&bCrystals ❖" # The name of the currency.
      default: 0 # The default balance.
      max: -1 # The maximum balance, set to -1 if no max.
      payable: false # If players should be able to use /ecobits pay to pay other players
      decimal: true # If decimal amounts are allowed rather than just integer amounts
      vault: false # If this currency should be registered with vault
      local: false # If this currency should not sync between servers
      commands: # A list of commands dedicated to this currency (for easier paying, checking balance, etc)
          - crystals
          - ecocrystals
```

## Using EcoBits currencies

You can use your EcoBits anywhere within effects using the [Price](https://plugins.auxilor.io/all-plugins/prices) system.
By setting your EcoBits currency as your Vault currency you can use your currency in other plugins too. Other plugins can also interact with EcoBits using the [placeholders](https://plugins.auxilor.io/ecobits/placeholderapi) and [commands](https://plugins.auxilor.io/ecobits/commands-and-permissions).