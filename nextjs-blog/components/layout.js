import Head from "next/head";
import React from 'react';
import { Container } from 'react-bootstrap';

import TopNavbar from "./navbar";

export default function Layout({ children, isLoggedIn }) {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <TopNavbar isLoggedIn={isLoggedIn} />
      <Container className="mt-3">
        {children}
      </Container>
    </>
  );
}
