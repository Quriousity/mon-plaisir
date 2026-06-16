"use client";

import { useActionState, useState } from "react";
import {
  login,
  signup,
  signInWithGoogle,
  type AuthState,
} from "./actions";

type Mode = "login" | "signup";

export default function LoginForm({ next = "/" }: { next?: string }) {
  const [mode, setMode] = useState<Mode>("login");

  const [state, formAction, pending] = useActionState<AuthState, FormData>(
    mode === "login" ? login : signup,
    null,
  );

  const [googleState, googleAction, googlePending] = useActionState<
    AuthState,
    FormData
  >((_prev, formData) => signInWithGoogle(formData), null);

  const message = state?.error ?? googleState?.error;

  return (
    <div className="w-full max-w-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">
        {mode === "login" ? "Welcome back" : "Join us"}
      </p>
      <h1 className="mt-3 text-3xl font-medium leading-tight md:text-4xl">
        {mode === "login" ? "Sign in" : "Create account"}
      </h1>

      {/* Google */}
      <form action={googleAction} className="mt-8">
        <input type="hidden" name="next" value={next} />
        <button
          type="submit"
          disabled={googlePending}
          className="flex w-full items-center justify-center gap-3 border border-line py-3 text-sm transition-colors hover:bg-[#f4f1ec] disabled:opacity-60"
        >
          <GoogleMark />
          {googlePending ? "Redirecting…" : "Continue with Google"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-wider text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      {/* Email + password */}
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="next" value={next} />
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full border border-line bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs uppercase tracking-wider text-muted"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
            minLength={6}
            className="mt-2 w-full border border-line bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
            placeholder="••••••••"
          />
        </div>

        {message && (
          <p className="text-sm text-accent" role="status">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-[#b91c1c] px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-[#991b1b] disabled:opacity-60"
        >
          {pending
            ? "Please wait…"
            : mode === "login"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        {mode === "login" ? "New here?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="text-foreground underline underline-offset-4 hover:text-accent"
        >
          {mode === "login" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
