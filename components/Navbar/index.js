import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Container,
  Navbar as BootstrapNavbar,
  Row,
  Col,
  Nav,
} from "react-bootstrap";

import { FiMenu } from "react-icons/fi";

import styles from "./Navbar.module.scss";
import Button from "../Button";

const Navbar = ({ props, isLanding = false, selected, setSelected }) => {
  return (
    <>
      <BootstrapNavbar expand={"md"} {...props} className={styles["first-row"]}>
        <Container>
          <BootstrapNavbar.Brand href="/">
            <Image
              src={"/solthaw-logo.svg"}
              height={80}
              width={160}
              alt={"SolThaw"}
            />
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle style={{ border: "none" }}>
            <FiMenu color={"white"} size={28} />
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse
            color="white"
            className="justify-content-end"
          >
            <Button
              className={`float-end ${styles["select-wallet-btn"]}`}
              variant={"gradient"}
            >
              Select Wallet
            </Button>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      {!isLanding && (
        <Container className={styles["second-row"]}>
          <Col className={styles["col1"]}>
            <Button
              onClick={() => {
                setSelected("stakednfts");
              }}
              style={{
                textDecoration: selected == "stakednfts" ? "underline" : "none",
              }}
            >
              Staked NFTs
            </Button>
          </Col>
          <Col className={styles["col2"]}>
            <Button
              onClick={() => {
                setSelected("nfts");
              }}
              style={{
                textDecoration: selected == "nfts" ? "underline" : "none",
              }}
            >
              {" "}
              NFTs
            </Button>
          </Col>
          <Col className={styles["col3"]}>
            <Button
              onClick={() => {
                setSelected("tokens");
              }}
              style={{
                textDecoration: selected == "tokens" ? "underline" : "none",
              }}
            >
              Tokens
            </Button>
          </Col>
        </Container>
      )}
    </>
  );
};

export default Navbar;
