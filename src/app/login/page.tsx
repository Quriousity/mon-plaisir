import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LoginForm from "./login-form";

export const metadata = {
  title: "Sign in · Mon plaisir",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const safeNext =
    next && next.startsWith("/") && !next.startsWith("//") ? next : "/";

  // Already signed in? Send them on.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect(safeNext);

  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Editorial image — hidden on small screens */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/feature.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">
            Mon plaisir
          </p>
          <h2 className="mt-3 max-w-sm text-3xl font-medium leading-tight">
            Objects chosen for how they live with you.
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="relative flex items-center justify-center px-6 py-16 lg:px-16">
        <span className="absolute left-6 top-8 text-xl font-semibold tracking-tight text-accent lg:left-16">
          Mon plaisir
        </span>
        <LoginForm next={safeNext} />
      </div>
    </main>
  );
}
