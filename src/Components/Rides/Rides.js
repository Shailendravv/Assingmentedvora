import { useStore } from "../../Context/store";
import { Ride } from "./Ride";
import { NoResults } from "../NoResults/NoResults";
import { sortByNearest } from "../../helpers/common";

export const Rides = () => {
  const { user, getRides } = useStore();
  const ride = sortByNearest(getRides(), user.station_code);

  return (
    <div>
      {ride.length ? (
        ride.map((r, i) => (
          <Ride key={i} station_code={user.station_code} {...r} />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
};
