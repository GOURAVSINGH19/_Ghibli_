import Grid from "../components/Grid";
import Home from "../components/Home";

const ComponentLibraryDemo = () => {
  return (
    <main className="w-screen h-screen bg_svg">
      <div className=" max-w-screen-xl mx-auto p-[.8rem] px-[2rem] h-full">
        <Home/>
        <Grid/>
      </div>
    </main>
  );
};

export default ComponentLibraryDemo;