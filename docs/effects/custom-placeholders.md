---
title: "Custom Placeholders"
sidebar_position: 8
---

You can create custom placeholders to reuse mathematical expressions or to have global
data shared between plugins.

These are in libreforge's config.yml, and look like this:

```yaml
placeholders:
    - id: "example_placeholder" # The placeholder ID
      value: "This is an example placeholder!" # The value of the placeholder

    - id: "example_expression_placeholder"
      value: "%level% * 2" # Mathematical expressions are fully supported!
```

You can create as many placeholders as you want by adding to the list.

Placeholders can be referenced with `%libreforge_<id>%`, and are fully supported with PlaceholderAPI.
    
