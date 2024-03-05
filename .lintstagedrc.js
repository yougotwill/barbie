const ignoredFiles = ['package.json', 'yarn.lock', 'tsconfig.json'];

const path = require('path');

const buildFormatCommand = (filenames) => {
  const results = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !ignoredFiles.includes(f));

  return results.length ? `prettier . -lw ${results.join(' ')}` : '';
};

const buildLintCommand = (filenames) => {
  const results = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !ignoredFiles.includes(f));

  return results.length
    ? `next lint --fix --file ${results.join(' --file ')}`
    : '';
};

module.exports = {
  '*.{css,js,json,md,scss,ts,tsx}': [buildFormatCommand, buildLintCommand],
};
