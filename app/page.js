"use client";

import FormManager from "@/components/forms/FormManager";
import LoginForm from "@/components/forms/LoginForm";
import { authService } from "@/services/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <FormManager
        queryKey="auth"
        createFn={authService.login}
        redirectTo="/products"
      >
        <LoginForm
          onForgotPassword={() => { }}
          onSignUp={() => { }}
          onGoogleSignIn={() => { }}
        />
      </FormManager>
    </div>
  );
}