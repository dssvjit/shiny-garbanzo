import AdminForm from "@/components/form/admin.form";
import Logo from "@/components/shared/logo";

function AdminPage() {
  return (
    <section className="w-full h-svh flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-5 space-y-4">
        <Logo withText className="w-24" />
        <h1 className="text-3xl font-bold text-neutral-900">Admin Page</h1>
        <p className="text-sm text-neutral-500">
          This is the admin page. You can manage your website from here.
        </p>
        <AdminForm />
      </div>
    </section>
  );
}

export default AdminPage;
