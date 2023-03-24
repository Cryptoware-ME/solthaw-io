import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Container,
  Navbar as BootstrapNavbar,
  Row,
  Col,
  Nav,
} from "react-bootstrap";

import styles from "./Navbar.module.scss";
import Button from "../Button";

const Navbar = ({ props, isLanding = false , selected ,setSelected }) => {
  return (
    <BootstrapNavbar style={{ padding: "0px" }} expand={"md"} {...props}>
      <Container fluid>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse color="white">
          <Col>
            <Row className={styles["first-row"]}>
              <Col>
                <BootstrapNavbar.Brand href="/">
                  <Image
                    src={"/solthaw-logo.svg"}
                    height={80}
                    width={160}
                    alt={"SolThaw"}
                  />
                </BootstrapNavbar.Brand>
              </Col>
              <Col>
                <Button
                  className={`float-end ${styles["select-wallet-btn"]}`}
                  variant={"gradient"}
                >
                  Select Wallet
                </Button>
              </Col>
            </Row>
            {!isLanding && (
              <Row className={styles["second-row"]}>
                <Col className={styles["col1"]}>
                  <Button
                    onClick={() => {setSelected("stakednfts")}}
                    style={{
                      textDecoration:
                        selected == "stakednfts" ? "underline" : "none",
                    }}
                  >
                   
                    Staked NFTs
                  </Button>
                </Col>
                <Col className={styles["col2"]}>
                  <Button onClick={() => {setSelected("nfts")}}
                    style={{
                      textDecoration:
                        selected == "nfts" ? "underline" : "none",
                    }}> NFTs</Button>
                </Col>
                <Col className={styles["col3"]}>
                  <Button onClick={() => {setSelected("tokens")}}
                    style={{
                      textDecoration:
                        selected == "tokens" ? "underline" : "none",
                    }}>Tokens</Button>
                </Col>
              </Row>
            )}
          </Col>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
