import useSWR from "swr";

export const useUser = () => {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  console.log(data);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
