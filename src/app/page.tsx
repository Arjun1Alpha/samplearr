import Header from "@/components/header/Header";
import Oppertunities from "@/components/sections/Oppertunities";


export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="filter"></div>
        <div></div>
      </div>
      <Oppertunities />
    </>
  );
}
