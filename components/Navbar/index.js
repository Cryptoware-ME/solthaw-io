import React from "react";
import Image from "next/image";

import { Container, Navbar as BootstrapNavbar } from "react-bootstrap";

import styles from "./Navbar.module.scss";
import Button from "../Button";

const Navbar = (props) => {
  return (
    <BootstrapNavbar expand={"md"} {...props}>
      <Container>
        <BootstrapNavbar.Brand href="/">
          <Image
            src={"/solthaw-logo.svg"}
            height={80}
            width={160}
            alt={"SolThaw"}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse className="justify-content-end" color="white">
          <Button variant={"gradient"} className={styles["select-wallet-btn"]}>
            Select Wallet
          </Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
