import { useState } from "react";
import SpringModal from "./SpringModal";
import { Button } from "@material-tailwind/react";

export default function CreateCreditCard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <Button onClick={() => setOpenModal(true)} color="green">
        Apply For Credit Card
      </Button>
      <SpringModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
