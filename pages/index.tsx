import Head from "next/head";
import Chart from "../components/Chart";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://demo.barchart.com/chart-widget/bw.js"
        ></script>
      </Head>

      <main>
        <h1>Chart 1 - NASDAQ</h1>
        <Chart symbol="$NASX" />
        <h1>Chart 2 - Apple</h1>
        <Chart symbol="AAPL" />
      </main>
    </div>
  );
};

export default Home;
