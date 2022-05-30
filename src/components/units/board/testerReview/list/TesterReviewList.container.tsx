import { useQuery } from "@apollo/client";

import _ from "lodash";
import { useState } from "react";
import {
  FETCH_BOARD_BEST,
  FETCH_BOARD_WITH_TAGS,
} from "../../commonReview/list/CommonReviewList.queries";
import TesterReviewPresenterPage from "./TesterReviewList.presenter";
import { FETCH_BOARD_CATEGORY_PICK } from "./TesterReviewList.queries";

export default function TesterReviewContainerPage() {
  const [search, setSearch] = useState([]);
  const checkPage = "TASTER";
  const tasterSearch = _.concat(search, "TASTER");

  const { data: fetchBoardsCategoryData, fetchMore: categoryFetchMore } =
    useQuery(FETCH_BOARD_CATEGORY_PICK, {
      variables: {
        category: "TASTER",
      },
    });

  const { data: fetchBoardWithTagData, fetchMore: tagFetchMore } = useQuery(
    FETCH_BOARD_WITH_TAGS,
    {
      variables: {
        tags: tasterSearch,
      },
    }
  );

  const { data: fetchBoardBestData } = useQuery(FETCH_BOARD_BEST, {
    variables: {
      category: "TASTER",
    },
  });

  const categoryDataLoadMore = () => {
    if (!fetchBoardsCategoryData) return;
    categoryFetchMore({
      variables: {
        page:
          Math.ceil(
            fetchBoardsCategoryData.fetchBoardCategoryPick.length / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardCategoryPick)
          return { fetchBoardCategoryPick: [...prev.fetchBoardCategoryPick] };
        return {
          fetchBoardCategoryPick: [
            ...prev.fetchBoardCategoryPick,
            ...fetchMoreResult?.fetchBoardCategoryPick,
          ],
        };
      },
    });
  };

  const infiniteTagArr = fetchBoardWithTagData?.fetchBoardWithTags.hits;
  const filterDataLoadMore = () => {
    if (!infiniteTagArr) return;
    tagFetchMore({
      variables: {
        page: Math.ceil(infiniteTagArr.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.hits) return { hits: [...prev.hits] };
        return {
          hits: [...prev.hits, ...fetchMoreResult?.hits],
        };
      },
    });
  };

  return (
    <TesterReviewPresenterPage
      categoryDataLoadMore={categoryDataLoadMore}
      filterDataLoadMore={filterDataLoadMore}
      fetchBoardsCategoryData={fetchBoardsCategoryData}
      fetchBoardWithTagData={fetchBoardWithTagData}
      search={search}
      setSearch={setSearch}
      fetchBoardBestData={fetchBoardBestData}
      checkPage={checkPage}
    />
  );
}
