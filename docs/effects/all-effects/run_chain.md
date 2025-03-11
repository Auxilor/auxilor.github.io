# `run_chain`

Execute an effect chain

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: run_chain
>   args:
>     run-type: normal # Optional, sets how the chain is ran, see the 'configuring an effect' page
>     chain: blind_and_pop # The ID of the chain to run
>   ...other config (eg triggers, filters, mutators, etc)
> ```
