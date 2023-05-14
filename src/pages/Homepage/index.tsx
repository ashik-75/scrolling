import Cards from "./Cards";
import Filter from "./Filter";
import Maps from "./Maps";

function Homepage() {
  return (
    <div>
      <Filter />
      <div className="grid grid-cols-2 gap-5">
        <Cards />
        <Maps />
      </div>
    </div>
  );
}

export default Homepage;
