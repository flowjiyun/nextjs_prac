import Counter from "@/components/counter";

const res  = fetch(`localhost:3000/login/api`)
export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
}
