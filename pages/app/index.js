import React, { useEffect, useState } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import SelectAll from "../../public/SelectAll.svg";
import NFTCard from "../../components/NFTCard";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import styles from "./App.module.scss";
import Vector from "../../public/Vector.svg";
import Image from "next/image";
import cryptoware from "../../public/cryptoware.svg"
import Rectangle from "../../public/Rectangle.svg"
const App = () => {
  const [selected, setSelected] = useState("stakednfts");

useEffect (() =>{
if (selected == "stakednfts" ){
  
} else if (selected == "nfts"){

}else if (selected == "tokens"){
 
}
},[selected])


  return (
    <div className={styles["wrapper"]}>
      <Navbar selected ={selected} setSelected = {setSelected} />
      <Container fluid style={{paddingTop:"24px"}} >
        <div className={styles["page-header"]}>
          <div className={styles["search-div"]}>
            <input
              className={styles["searchbar"]}
              type="search"
              // class="form-control rounded"
              placeholder="Search items"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <Image className={styles["Vector"]} alt="icon" src={Vector} />
          </div>

          <div className={styles["select-all"]}>
            <Button>Select All</Button>
            <Image alt="icon" src={SelectAll} />
          </div>
        </div>

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
              <div className={styles["mid-table"]}>
              <div className={`${styles["row"]} pb-3 pt-3`}>
                <Image className={styles["Rectangle"]} alt="icon" src={Rectangle} />
                <h3 className={styles["label-rec"]}>Close empty account(4)</h3>
                </div>
              
                <div className={`${styles["row"]}`}>
                <Image className={styles["Rectangle"]} alt="icon" src={Rectangle} />
                <h3 className={styles["label-rec"]}>Close empty serum accounts(2)</h3>
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
      <div className={styles.footer}>
        <Image alt="icon" src={cryptoware} />
      </div>
    </div>
  );
};

export default App;
