import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Api";

const useGetUserData = (endpoint) => {
  const {
    isPending,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch(BASE_URL + endpoint).then((res) => res.json()),
  });
  return [data, refetch, isPending];
};

export default useGetUserData;
