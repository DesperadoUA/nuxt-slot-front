module.exports = {
  apps: [
    {
      name: 'myapp4',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      "env": {
        "PORT": "3001",
      }
    }
  ]
}

