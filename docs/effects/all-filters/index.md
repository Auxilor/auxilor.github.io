---
title: "How to configure a filter"
---

Filters are config keys, added under the filters: section of an effect

## Example Filter Config
```yaml
- id: cancel_event
  triggers:
    - mine_block
  filters:
    blocks:
      - budding_amethyst
```

Filters work by checking the provided data against the rules that you outline, so in this example it will prevent the player from mining budding amethyst.

Like conditions, you can also invert filters like this:
```yaml
- id: cancel_event
  triggers:
    - mine_block
  filters:
    not_blocks:
      - budding_amethyst
```

This will negate the filter, i.e. only cancel events that **aren't** budding amethyst breaks.
