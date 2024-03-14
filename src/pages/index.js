import BtnWhatsApp from "@/components/btnWhatsApp/btnWhatsApp";
import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";
import ImageContainer from "@/components/imageContainer";
import Head from "next/head";

import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gessomar</title>
      </Head>

      <div className={styles.imageDiv}>
        <ImageContainer src="/Logo.png" alt="Logo" />
      </div>

      <div className={styles.orcamentoDiv}>
        <h1>ORÇAMENTO ONLINE</h1>
        <BtnWhatsApp />
      </div>

      <div className={styles.services}>
        SANCAS . FORROS . MOLDURAS . NICHOS . DRAYWALL
      </div>

      <div className={styles.social}>
        <span>NOS SIGA NAS REDES SOCIAIS</span>
        <div>
          <a
            href="https://www.instagram.com/gessomarsp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramLine color="#1977F3" size={70} title="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/Gessomarsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleFill color="#1977F3" size={70} title="Facebook" />
          </a>
        </div>
      </div>
    </>
  );
}
