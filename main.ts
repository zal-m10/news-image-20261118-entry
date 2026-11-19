// A working news-image-20261118 entry (Node 22, standard library only):
// its image is the entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

const inputPath = join(cwd(), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(inputPath, outputPath);