import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const dir = fileURLToPath(import.meta.url);
console.log(await fs.lstat(dir));
//# sourceMappingURL=use-fs.mjs.map