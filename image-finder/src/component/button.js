import React from "react";
import styles from '../styles.module.css';
const ButtonLoadMore = ({ loadMore }) => {
  return (
    <button className={styles.Button} onClick={loadMore}>
      Load more...
    </button>
  );
};
export default ButtonLoadMore;