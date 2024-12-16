module.exports = {
  '**/*.{ts,tsx,js,jsx}': (filenames) => [
    `nx format:write --files=${filenames.join(',')}`,
    `nx lint --files=${filenames.join(',')}`,
  ],
  '**/*.{css,scss,md,html}': 'nx format:write',
};
