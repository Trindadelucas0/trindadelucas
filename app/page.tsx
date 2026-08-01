import { BentoGrid } from "@/components/BentoGrid";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="flex min-h-dvh w-full items-start justify-center px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] sm:items-center sm:px-4 sm:py-10">
        <BentoGrid />
      </main>
    </>
  );
}
