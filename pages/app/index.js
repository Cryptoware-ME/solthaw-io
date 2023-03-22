import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import NFTCard from "../../components/NFTCard";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <Navbar />
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              {[...Array(10)].map((nft, idx) => (
                <Col md={3} key={idx} className={styles["nft-card-col"]}>
                  <NFTCard nft_idx={idx} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4}>
            <div className={styles["selection-table"]}>
              <div className={`${styles["row"]} ${styles["bordered"]}`}>
                <h3 className={styles["label"]}>Items selected:</h3>
                <p className={styles["value"]}>5</p>
              </div>
              <div className={styles["inner-table"]}>
                <div className={`${styles["row"]}`}>
                  <h3 className={styles["label"]}>SOL to be exchanged:</h3>
                  <p className={styles["value"]}>0.010</p>
                </div>
                <div className={`${styles["row"]}`}>
                  <h3 className={styles["label"]}>Current SOL balance:</h3>
                  <p className={styles["value"]}>13</p>
                </div>
                <div className={`${styles["row"]}`}>
                  <h3 className={styles["label"]}>SOL balance after burn:</h3>
                  <p className={styles["value"]}>13.01</p>
                </div>
              </div>
              <div className={`${styles["row"]} ${styles["btn-row"]}`}>
                <Button variant={"gradient-2"}>Unfreeze</Button>
                <Button variant={"gradient-3"}>Unfreeze and burn</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
