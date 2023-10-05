import React from 'react'
import Layout from "@/components/layout/Layout";
import { StateContext } from "@/context/StateContext";
import {Toaster} from 'react-hot-toast'
export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
