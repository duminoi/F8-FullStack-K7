// import React from 'react'

import { listData } from "../../data/navSection/listData";
import ListItem from "./ListItem";
export default function List() {
  return (
    <>
      <ul className="ml-10 hidden items-center gap-8 lg:flex">
        {listData.map((item) => (
          <ListItem key={item.id} {...item}></ListItem>
        ))}
      </ul>
    </>
  );
}
