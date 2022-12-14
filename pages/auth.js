import Head from "next/head";

import { Auth } from "../screens";
import Layout from "../screens/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login - Pizza </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div id="authPage">
            <Auth />
          </div>
        </Layout>
      </main>
    </div>
  );
}
