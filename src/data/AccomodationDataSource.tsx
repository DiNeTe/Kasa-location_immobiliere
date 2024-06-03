import { Accommodation } from "./Accomodation.tsx";
// définit un contrat et sert d'abstraction pour gérer la source des donnée
export interface AccomodationDataSource {
  fetchMany(): Promise<Accommodation[]>;
  fetchOne(accommodationId: string): Promise<Accommodation | undefined>;
}
