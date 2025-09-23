type UserId = number;

interface User {
  id: UserId;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

interface Admin extends User {
  permissions: string[];
}

export function describeUser(user: User | Admin): string {
  return "permissions" in user
    ? `Admin #${user.id}: ${user.name} (${user.permissions.length} permissions)`
    : `User #${user.id}: ${user.name}`;
}

console.log(describeUser({ id: 1, name: "Alice", createdAt: new Date() }));
console.log(
  describeUser({
    id: 2,
    name: "Bob",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
  })
);
