{
  "server": {
    "port": 5000,
    "env": "production",
    "jwtSecret": "сгенерируйте-случайную-строку-здесь",
    "debug": false
  },
  "database": {
    "cosmos": {
      "enabled": false
    },
    "sqlite": {
      "enabled": true,
      "url": "database.sqlite"
    }
  },
  "storage": {
    "azure": {
      "enabled": false
    },
    "local": {
      "enabled": true,
      "path": "./uploads"
    }
  },
  "search": {
    "azure": {
      "enabled": false
    }
  },
  "ai": {
    "azureOpenAI": {
      "enabled": false
    }
  },
  "integrations": {
    "telegram": {
      "enabled": false
    },
    "github": {
      "enabled": false
    },
    "keyVault": {
      "enabled": false
    }
  }
}
