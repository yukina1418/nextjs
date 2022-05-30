import { useQuery } from "@apollo/client";
import ProfilePresenter from "./Profile.presenter";
import { FETCH_USER } from "./Profile.queries";

export default function ProfileContainer() {
  const { data } = useQuery(FETCH_USER, {
    variables: {
      userEmail: "rlaalsdud@test.com",
    },
  });

  return <ProfilePresenter data={data} />;
}
