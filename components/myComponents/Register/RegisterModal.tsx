import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RegisterModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-black text-white text-sm font-medium py-2 px-5 rounded cursor">
          {" "}
          Login Form
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Form</DialogTitle>
            <DialogDescription className="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              error similique veniam laudantium adipisci perferendis cumque
              nihil corrupti, minima harum, ipsum at maxime deserunt vero illo
              iure necessitatibus amet. Magni.
            </DialogDescription>
            {/* <LoginForm /> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
