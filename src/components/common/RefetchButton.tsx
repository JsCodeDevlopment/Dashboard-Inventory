"use client";

import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

interface RefetchButtonProps {
  refetch: () => void;
  isPending?: boolean;
}

const RefetchButton = ({ refetch, isPending }: RefetchButtonProps) => {
  const handleClick = async () => {
    refetch();
  };

  return (
    <Button
      variant="default"
      size="icon"
      disabled={isPending}
      onClick={handleClick}
    >
      {isPending ? (
        <>
          <RotateCw size={18} className="animate-spin" />
        </>
      ) : (
        <RotateCw size={18} />
      )}
    </Button>
  );
};

export default RefetchButton;
