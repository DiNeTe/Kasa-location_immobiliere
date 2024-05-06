import { Accommodation } from "./Accomodation.tsx";

export interface AccomodationDataSource {
  fetchMany(): Promise<Accommodation[]>;
  fetchOne(accommodationId: string): Promise<Accommodation | undefined>;
}
