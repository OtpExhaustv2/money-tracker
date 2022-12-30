enum LocalRoutes {
  AUTH = 'auth',
  USERS = 'users',
  BANK_ACOUNTS = 'bank-accounts',
  TRANSACTIONS = 'transactions',
}

export const Routes = new Proxy(LocalRoutes, {
  get: (target, prop) => {
    return `api/${target[prop]}`;
  },
});
