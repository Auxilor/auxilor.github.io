# `give_job_xp`
#### Triggered Effect

Gives experience points for a certain job

**Requires EcoJobs**

# Example Config
```yaml
- id: give_job_xp
  args:
    amount: 100 # The amount of xp to give
    job: miner # The job to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```