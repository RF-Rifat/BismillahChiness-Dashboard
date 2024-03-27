import { useQuery } from '@tanstack/react-query';

export const BASE_URL = 'http://localhost:5000';
const useGetData = (endpoint) => {
  const {
    isPending,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ['data'],
    queryFn: () => fetch(BASE_URL + endpoint).then((res) => res.json()),
  });
  return [data, refetch, isPending];
};

export default useGetData;
