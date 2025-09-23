interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

export function formatUser(user: User) {
  return `User #${user.id}: ${user.name} ${user.isAdmin ? "(Admin)" : ""}`;
}

const user: User = { id: 1, name: "test", isAdmin: true };
console.log(formatUser(user));
