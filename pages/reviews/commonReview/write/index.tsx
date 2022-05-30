import { useRouter } from "next/router";
import CommonReviewWriteContainer from "../../../../src/components/units/board/commonReview/write/CommonReviewWrite.container";

export default function CommonReviewWritePage() {
  const router = useRouter();
  const checkPage = router.query.checkPage;
  const wishId = router.query?.wishId;
  const communityCheckPage = router.query.communityCheckPage;


  return (
    <CommonReviewWriteContainer
      isEdit={false}
      checkPage={checkPage}
      wishId={wishId}
      communityCheckPage={communityCheckPage}
    />
  );
}
