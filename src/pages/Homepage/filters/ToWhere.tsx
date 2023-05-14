import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../../services/property.services";

function ToWhere({ location, handleChange }: any) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["where"],
    queryFn: () => getProperties(`wp-json/wp/v2/property_groups`),
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log({ location });
  return (
    <div>
      <select
        value={location}
        onChange={handleChange}
        className="mr-4 px-2 py-2 outline-none"
        name="location"
        id=""
      >
        {data?.map((place: any) => {
          return (
            <option value={place?.slug} key={place?.id}>
              {place.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ToWhere;
