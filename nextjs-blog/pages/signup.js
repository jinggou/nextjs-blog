import React from "react";
import Layout from "../components/layout";
import { SignupForm } from "../components/forms";

export default function SignupPage() {
  const [modalShow, setModalShow] = React.useState(false);

const onClick = () => {
    
}

  return (
    <Layout isLoggedIn={false}>
      <SignupForm header="Join E-Library" />
    </Layout>
  );
}
