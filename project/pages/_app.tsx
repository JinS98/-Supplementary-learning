import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/component/commons/layout";
import ApolloSetting from "../src/component/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
