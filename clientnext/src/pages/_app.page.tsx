import { AppProps } from "next/app";
import Header from "../components/header/header";
import Head from "next/head";
import style from "./_app.module.scss";
import "./_app.scss";
import SideBar from "../components/sidebar/sidebar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={style.app}>
        <Header />
        <div className={style.app_content}>
          <div className={style.app_sidebar}>
            <SideBar />
          </div>
          <div className={style.app_content_content}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
