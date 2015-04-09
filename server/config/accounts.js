ServiceConfiguration.configurations.update(
  { service: "facebook" },
  {
    $set: {
      appId: "XXXXXXXXXXXXXXX",
      secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
  },
  { upsert: true }
);

ServiceConfiguration.configurations.update(
  { service: "google" },
  {
    $set: {
      clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
    }
  },
  { upsert: true }
);
