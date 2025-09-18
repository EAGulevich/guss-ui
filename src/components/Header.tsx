import { useUserStore } from "../store.ts";

export const Header = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      Header - {user?.username} - {user?.role}
    </div>
  );
};
