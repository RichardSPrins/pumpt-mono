import React from "react";
import { useRouter } from "blitz";
import Layout from "app/layouts/Layout";
import { SignupForm } from "app/auth/components/SignupForm";

const SignupPage = () => {
  const router = useRouter();
  return <div>
      <SignupForm onSuccess={() => router.push("/")} />
    </div>;
};

SignupPage.getLayout = page => <Layout title="Sign Up">{page}</Layout>;

export default SignupPage;