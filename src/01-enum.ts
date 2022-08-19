enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const enriUser: User = {
  username: "Enrique",
  role: ROLES.ADMIN
}
