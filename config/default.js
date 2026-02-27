{
  "server": {
    "port": 5000,
    "env": "production",
    "jwtSecret": "kh9IQ8E3Fk1C3unB",
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
