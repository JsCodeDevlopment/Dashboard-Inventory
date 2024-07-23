export const userKeys = {
  me: ["user"] as const,
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const, // invalidate all user list
  list: (id: string) => [...userKeys.lists(), { id }] as const, // invalidate user list by filter
};
