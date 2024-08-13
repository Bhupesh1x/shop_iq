import { Button } from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

export const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button className="flex items-center gap-x-2 rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};
