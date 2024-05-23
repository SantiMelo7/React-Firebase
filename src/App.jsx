import { Authentication } from "./components/auth/Auth";
import { FirestoreDB } from "./components/firestoreDatabase/FirestoreDB";
import { RealTimeDataBase } from "./components/realTime-ancient/RealTimeDataBase";
import { Storage } from "./components/storage/Storage";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className=" text-4xl font-extrabold">Aprendiendo Firebase</h1>
      <div className="border-[0.5px] border-blue-500 mt-3 w-full" />
      <Authentication />
      <FirestoreDB />
      <Storage />
      <RealTimeDataBase />
    </div>
  );
}

export default App;
