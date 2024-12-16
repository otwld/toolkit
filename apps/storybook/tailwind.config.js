const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const { withTV } = require('tailwind-variants/transformer');

console.info(
  'createGlobPatternsForDependencies',
  createGlobPatternsForDependencies(__dirname),
);

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    '../../node_modules/flowbite/**/*.js',
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,mdx}'),
    ...createGlobPatternsForDependencies(__dirname).map((dep) =>
      dep.replace('ts,html', 'ts,html,'),
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
});
