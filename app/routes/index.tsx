import Main from "~/components/Main";

export default function Index() {
  return (
    <div style={{
      background:`repeating-linear-gradient(0deg, rgba(137,134,134, 0.45) 0px, rgba(137,134,134, 0.45) 1px,transparent 1px, transparent 36px),repeating-linear-gradient(90deg, rgba(137,134,134, 0.45) 0px, rgba(137,134,134, 0.45) 1px,transparent 1px, transparent 36px),linear-gradient(90deg, hsl(334,2%,100%),hsl(334,2%,100%));`
    }}>
    <main className="max-w-[720px] mx-auto py-20">
      <Main />
    </main>

    </div>

    
  );
}
