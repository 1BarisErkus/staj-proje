import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  };

  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return <>Deneme</>;
}
