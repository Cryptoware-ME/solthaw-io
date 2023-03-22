import Image from "next/image";
import React from "react";

import NFT from "../../assets/images/nft.png";
import SolscanIcon from "../../assets/images/solscan.svg";
import ExplorerIcon from "../../assets/images/explorer.svg";

import styles from "./NFTCard.module.scss";

const NFTCard = ({
  name = "DeGods #9833",
  address = "dsbk...njks",
  nft_idx,
}) => {
  return (
    <div className={styles["nft-card"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          alt="NFT"
          src={`/nfts/${nft_idx}.png`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles["info-section"]}>
        <h2 className={styles["name"]}>{name}</h2>
        <h3 className={styles["address"]}>
          {address}
          <span className={styles["icon-wrapper"]}>
            <Image src={SolscanIcon} width={18} height={18} alt="Solscan" />
          </span>
          <span className={styles["icon-wrapper"]}>
            <Image src={ExplorerIcon} width={18} height={18} alt="Explorer" />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default NFTCard;
