#! /usr/bin/env node

/**
 * Bin file for executing attractifier.
 * Node API in api/node.js.
 */
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install();

import { formatFile } from "./api/node";

const inputFile = process.argv[2];
try {
    if (!inputFile) {
        process.stderr.write("Usage: node ./lib/index.js FILE\n");
        process.exit(1);
    }

    process.stdout.write(formatFile(inputFile));
} catch (error) {
    if (error.message.indexOf(inputFile) !== 0) {
        error.message = `${inputFile}: ${error.message}`;
    }
    throw error;
}