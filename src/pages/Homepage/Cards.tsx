import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "../../components/Loader";
import { getProperties } from "../../services/property.services";
import Card from "./Card";

function Cards() {
  const {
    data: properties,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(`wp-json/wp/v2/properties?`),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    // @ts-expect-error
    return <div>{error.message}</div>;
  }

  console.log(properties);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {properties?.map((property: any) => {
          return <Card key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
