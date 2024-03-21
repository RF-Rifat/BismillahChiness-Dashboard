import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm } from "react-hook-form";

export default function EmailModal({ email, name }) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm(); // Initialize React Hook Form

  const handleOpen = () => setOpen(!open);

  const onSubmit = (data) => {
    console.log(data);
    handleOpen();
    reset();
  };

  return (
    <>
      <Button onClick={handleOpen} color="blue">
        <MdOutlineMailOutline className="text-2xl" />
      </Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              New message to Admin
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write the message and then click button below
          </Typography>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Username
            </Typography>
            <Input label={name} {...register("name")} />
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Subject
            </Typography>
            <Input label="Subject" {...register("subject")} />
            <Textarea label="Message" {...register("message")} />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
