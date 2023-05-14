function Maps() {
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

  const defaultProps = {
    center: {
      lat: 29.972427,
      lng: -90.056406,
    },
    zoom: 11,
  };

  console.log(properties);

  const longLat = properties?.map((prop: any) => ({
    lat: prop?.acf?.geolocation?.lat,
    lng: prop?.acf?.geolocation?.lng,
  }));

  console.log({ longLat });

  return (
    // Important! Always set the container height explicitly
    <Suspense fallback={<div>Loading ....</div>}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAiTrVAB6ErqbnD_pJfK8-lkRpxspprmbw",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {longLat?.map((data: any) => (
            <AnyReactComponent
              lat={data.lat}
              lng={data?.lng}
              text="My Marker"
            />
          ))}
        </GoogleMapReact>
      </div>
    </Suspense>
  );
}

export default Maps;

import { useQuery } from "@tanstack/react-query";
import GoogleMapReact from "google-map-react";
import { Suspense } from "react";
import { LoadingSpinner } from "../../components/Loader";
import { getProperties } from "../../services/property.services";

const AnyReactComponent = ({ text }: any) => (
  <div className="bg-rose-700 text-white">{text}</div>
);
