import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Api";

// get all comments
const useComment = () => {
  const {
    isPending,

    data: comments,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => fetch(`${BASE_URL}/api/comment`).then((res) => res.json()),
  });

  return [comments, refetch, isPending];
};

export default useComment;
