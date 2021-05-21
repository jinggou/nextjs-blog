import React from "react";
import Layout from "../components/layout";
import { SigninForm } from "../components/forms";

export default function SignupPage() {
  return (
    <Layout isLoggedIn={false}>
      <SigninForm header="Sign in to E-Library" />
    </Layout>
  );
}
