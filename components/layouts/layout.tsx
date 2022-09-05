import { Head } from "next/document";
import { FC } from "react";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head></Head>
      <nav></nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
