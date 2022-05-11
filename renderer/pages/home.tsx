import React from "react";
import Head from "next/head";
import Link from "next/link";

function Home():React.FC {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
          <button onClick={() => console.log("ボタン押した")}> 開く</button>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Home;
