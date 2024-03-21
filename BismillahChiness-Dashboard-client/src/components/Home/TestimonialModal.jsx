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

import { useForm } from "react-hook-form";
import { modifyData } from "../../Hooks/Api";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TestimonialModal() {
  const { authInfo } = useAuth();
  const { displayName, photoURL } = authInfo?.user || {};

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data) => {
    const testimonial = { ...data, name: displayName, imageSrc: photoURL };

    try {
      const res = await modifyData("/api/testimonial", "POST", testimonial);
      if (res.acknowledged) {
        toast.success("Testimonial Posted Successfully");
      }
    } catch (error) {
      console.log(error);
    }

    handleOpen();
    reset();
  };

  return (
    <>
      <Button onClick={handleOpen} color="blue">
        Post a Review
      </Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Give A Review
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
            <Input label="Occupation" {...register("occupation")} />

            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Email
            </Typography>
            {/* <Input label="Email" {...register("email")} /> */}
            <Textarea label="Review" {...register("review")} />
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
            Send Review
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
