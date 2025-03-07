import { mailSchema } from "@/lib/schemas/mail.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function EmailForm() {
  const form = useForm<z.infer<typeof mailSchema>>({
    resolver: zodResolver(mailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof mailSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start justify-center gap-3"
      >
        <FormLabel
          htmlFor="email"
          className="text-lg font-medium tracking-tighter text-neutral-600"
        >
          Submit your email to get updates
        </FormLabel>
        <div className="flex w-full items-center justify-between gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input className="" placeholder="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-1/3 bg-blue-500 hover:bg-blue-600 border border-blue-600"
          >
            Submit
          </Button>
        </div>
        <span className="text-sm text-neutral-500 w-3/4">
          Don't worry , we will not share your email to anybody. Promise!
        </span>
      </form>
    </Form>
  );
}

export default EmailForm;
