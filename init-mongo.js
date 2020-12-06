db.createUser({
  user: 'admin2',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'server',
    },
  ],
});
