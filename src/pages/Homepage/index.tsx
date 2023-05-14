import Cards from "./Cards";
import Filter from "./filters";

function Homepage() {
  return (
    <div>
      <Filter />
      <div className="grid grid-cols-2 gap-5">
        <Cards />
        {/* <Maps /> */}
        <div>Maps</div>
      </div>
    </div>
  );
}

export default Homepage;
