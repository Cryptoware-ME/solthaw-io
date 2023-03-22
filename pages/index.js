import { Container } from "react-bootstrap";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Container>
        <div className={styles["hero-section"]}>
          <h1 className={`${styles.heading}`}>
            <span className={`${styles["gradient-text"]}`}> LIBERATE </span>
            <br /> YOUR NFTS
          </h1>
          <h3 className={styles["subheading"]}>
            Reclaim your previously-staked NFTs with a button.
          </h3>
          <Button variant={"gradient"} className={styles["select-wallet-btn"]}>
            Select Wallet
          </Button>
        </div>
      </Container>
    </div>
  );
}
