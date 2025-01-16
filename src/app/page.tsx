export const dynamic = "force-dynamic";
import { RandomDog } from "@/components/random-dog";
import { getRandomDog } from "@/data";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["randomDog"],
    queryFn: getRandomDog,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RandomDog />
      </HydrationBoundary>
    </main>
  );
}
