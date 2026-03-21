import { chmodSync, readFileSync, writeFileSync } from "node:fs";

const distPath = new URL("../dist/index.js", import.meta.url);
const distSource = readFileSync(distPath, "utf8");

const normalizedSource = distSource.startsWith("#!/usr/bin/env bun")
  ? distSource.replace("#!/usr/bin/env bun", "#!/usr/bin/env node")
  : `#!/usr/bin/env node\n${distSource}`;

writeFileSync(distPath, normalizedSource);

// Ensure the packed bin keeps an executable mode in non-Windows installs.
chmodSync(distPath, 0o755);
