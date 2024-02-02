import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  //Fetch and store it in its global store and wont refetch everytime we use it, will check if data exists and needs to be revalidated or not. REDUX Alternatively
  //mutate -> if we want to purposely fetch it again
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
