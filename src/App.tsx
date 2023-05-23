import { useState } from "react";
import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
function App() {
  const [waiting, SetWaiting] = useState<boolean>(true);
  const [loading, SetLoading] = useState<boolean>(false);
  const [error, SetError] = useState<boolean>(false);
  const [questions, SetQuestions] = useState<[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [correct, SetCorrect] = useState<number>(0);
  if(loading){
     return <Loading /> 
  }
  if(waiting){
    return  <SetupForm />
  }
  return (
    <>
    afdsaf
      {/* <SetupForm /> */}
    </>
  );
}

export default App;
