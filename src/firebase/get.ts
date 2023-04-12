import { collection, getDocs, query } from "firebase/firestore";
import { Database } from ".";

export const GetData = async (col:string) => {
  let data:any = []
  const citiesRef = collection(Database, col);
  const q = query(citiesRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc:any) => {
    data.push(doc.data())
  });
  console.log(data)
  return data;
}