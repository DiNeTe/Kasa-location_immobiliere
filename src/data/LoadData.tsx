import data from "./listings.json";
import { dataType } from "./Types.tsx";

const loadData = async (): Promise<dataType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simule un appel réseau
      resolve(data);
    }, 200);
  });
};

// const loadData = async (): Promise<dataType[]> => {
//   try {
//     const response = await fetch("URL API");
//     if (!response.ok)
//       {
//       throw new Error("erreur: ${response.status}");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error( error);
//     return [];
//   }}

export default loadData;
