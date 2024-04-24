import data from "./listings.json";
import { dataType } from "./Types.tsx";

const dataInterface = async (): Promise<dataType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simule un appel réseau
      resolve(data);
    }, 200);
  });
};

// const dataInterface = async (): Promise<dataType[]> => {
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

export default dataInterface;
