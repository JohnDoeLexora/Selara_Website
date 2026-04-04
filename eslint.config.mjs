import nextVitals from 'eslint-config-next';

const config = [
  ...nextVitals,
  { ignores: ['_legacy_backup/**'] },
];

export default config;
