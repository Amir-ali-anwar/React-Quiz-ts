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
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })
  const handleChange=(e:React.ChangeEvent<HTMLFormElement>)=>{
    const name= e.target.name
    const value= e.target.value
    setQuiz(()=>{
      return {...quiz,[name]:value}
    })
  }
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(quiz);
    
  }
  if(loading){
     return <Loading /> 
  }
  if(waiting){
    return  <SetupForm {...quiz} handleChange={handleChange} handleSubmit={handleSubmit}/>
  }
  return (
    <>
    afdsaf
      {/* <SetupForm /> */}
    </>
  );
}

export default App;
