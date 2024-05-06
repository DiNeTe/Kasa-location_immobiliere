import { AccomodationDataSource as AccommodationDataSource } from "./AccomodationDataSource.tsx";
import data from "./listings.json";
import { Accommodation } from "./Accomodation.tsx";

const fakeAccommodationDataSource: AccommodationDataSource = {
  async fetchMany(): Promise<Accommodation[]> {
    return data;
  },

  async fetchOne(accommodationId: string): Promise<Accommodation | undefined> {
    return data.find((accommodation) => accommodation.id === accommodationId);
  },
};

export default fakeAccommodationDataSource;
