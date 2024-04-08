import { useQuery } from '@tanstack/react-query';

export const BASE_URL = 'http://localhost:5000';
// export const BASE_URL = 'https://bismillah-chiness-dashboard-server.vercel.app';
const useGetOrderData = (endpoint) => {
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

export default useGetOrderData;
