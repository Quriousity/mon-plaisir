import Link from "next/link";
import { Package, MapPin, User } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Accordion from "@/components/Accordion";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export const metadata = { title: "My account · Mon plaisir" };

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
      Coming soon
    </span>
  );
}

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const iconClass = "h-4 w-4 text-accent";
  const items = [
    {
      title: "Orders",
      icon: <Package className={iconClass} strokeWidth={1.5} aria-hidden="true" />,
      content: (
        <div className="space-y-4">
          <p>You haven&apos;t placed any orders yet.</p>
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="inline-block text-foreground underline underline-offset-4 hover:text-accent"
            >
              Browse the shop
            </Link>
            <ComingSoon />
          </div>
        </div>
      ),
    },
    {
      title: "Addresses",
      icon: <MapPin className={iconClass} strokeWidth={1.5} aria-hidden="true" />,
      content: (
        <div className="space-y-4">
          <p>No shipping or billing address saved yet.</p>
          <ComingSoon />
        </div>
      ),
    },
    {
      title: "Account details",
      icon: <User className={iconClass} strokeWidth={1.5} aria-hidden="true" />,
      content: (
        <div className="space-y-4">
          <dl className="space-y-3">
            <div className="flex justify-between gap-4">
              <dt>Email</dt>
              <dd className="text-foreground">{user?.email ?? "—"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Password</dt>
              <dd className="text-foreground">••••••••</dd>
            </div>
          </dl>
          <ComingSoon />
        </div>
      ),
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[720px] px-5 py-16 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            My account
          </p>
          <h1 className="mt-3 text-3xl font-medium md:text-4xl">Bonjour.</h1>
          {user?.email && (
            <p className="mt-2 text-sm text-muted">
              Signed in as{" "}
              <span className="text-foreground">{user.email}</span>
            </p>
          )}

          <div className="mt-10">
            <Accordion items={items} defaultOpen={0} />
          </div>

          <form action={signOut} className="mt-10">
            <button
              type="submit"
              className="border border-line px-8 py-3 text-sm transition-colors hover:bg-[#f4f1ec]"
            >
              Sign out
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
