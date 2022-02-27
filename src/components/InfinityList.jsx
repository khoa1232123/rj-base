import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { IkoCol, IkoRow } from "../ikoComponents";
import { Product } from "./Products";

const InfinityList = ({ data }) => {
  const listRef = useRef(null);
  const perLoad = 6;
  const [listData, setListData] = useState([]);
  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setListData(data.slice(0, perLoad));
    setIndex(1);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxIndex = data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setListData(listData.concat(data.slice(start, end)));

        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, listData]);

  return (
    <div ref={listRef}>
      <IkoRow>
        {listData.map((item, index) => (
          <IkoCol key={index} col={4} mdCol={4} smCol={6}>
            <Product product={item} />
          </IkoCol>
        ))}
      </IkoRow>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
