# `jobs_money_multiplier`
:::dangerPermanent Effect
This effect is permanent and does not require a trigger.
:::

Multiplies money gain from jobs


:::infoRequires:
Jobs Reborn
:::

# Effect Syntax
```yaml
- id: jobs_money_multiplier
  args:
    multiplier: 1.5 # The money multiplier
    jobs: # The list of jobs to multiply money for. If removed, it will multiply all jobs.
      - miner
      - fisherman
```