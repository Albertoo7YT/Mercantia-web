module.exports = {
  apps: [
    {
      name: 'mercantia-landing',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3004',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3004,
      },
    },
  ],
};
