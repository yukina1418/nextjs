import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 5);
    setActivedPage(startPage - 5);
    props.refetch({ page: startPage - 5 });
  };

  const onClickNextPage = () => {
    if (startPage + 5 > lastPage) return;
    setStartPage((prev) => prev + 5);
    setActivedPage(startPage + 5);
    props.refetch({ page: startPage + 5 });
  };

  return (
    <Paginations01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
