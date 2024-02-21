"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
const SetupPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    setDomLoaded(true);
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      {domLoaded && (
        <div className="p-4">
          <Button>Click me</Button>
        </div>
      )}
    </>
  );
};
export default SetupPage;
