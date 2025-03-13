import { adminSchema } from "@/lib/schemas/admin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAdminLogin } from "@/lib/query/mutations/auth.query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function AdminForm() {
  const { mutateAsync: adminLogin } = useAdminLogin();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof adminSchema>) {
    if (!values) return;

    try {
      const response = await adminLogin(values);

      if (!response.accessToken) {
        toast("Invalid Credentials");
        return;
      }

      localStorage.setItem(
        "dss-admin-accessToken",
        response.accessToken.split(" ")[1]
      );

      navigate("/events");
      toast("Login Successful");
    } catch (error) {
      console.log("ADMIN LOGIN: ", error);
      toast("Something Went Wrong");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>This is your secret password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default AdminForm;
