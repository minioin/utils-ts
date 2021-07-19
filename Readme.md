# Readme

Utilities in typescript

## Installation

```
deno install -A -f -n <COMMAND> --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/import_map.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/<COMMAND>.ts
```

## Tools

```
# servers: Tool to manage servers
deno install -A -f -n servers --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/importmap.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/servers.ts

# gw: Wrapper for gradle wrapper
deno install -A -f -n gw --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/importmap.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/gw.ts

# getpocket: Getpocket client
deno install -A -f -n getpocket --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/importmap.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/getpocket.ts

# ghrelease: Github release installer
deno install -A -f --unstable -n ghrelease --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/importmap.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/ghrelease.ts

# mergeyaml: Merge yaml files
deno install -A -f --unstable --importmap=https://raw.githubusercontent.com/minioin/utils-deno/release/importmap.json https://raw.githubusercontent.com/minioin/utils-deno/release/bin/mergeyaml.ts
```

## License

MIT
