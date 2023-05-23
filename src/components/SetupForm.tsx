import FormRow from "./FormRow"
const SetupForm = () => {
  const handleChange=()=>{
    console.log('data');
    
  }
  return (
    <main>
        <section className='quiz quiz-small'>   
            <form className='setup-form'>
            <h2>setup quiz</h2>
            <FormRow 
             labelText="number of questions"
             handleChange={handleChange}
             type="number"
             className='form-input'
            />
             <FormRow 
             labelText="category"
             handleChange={handleChange}
             type="number"
             className='form-input'
            />
            </form>
        </section>
    </main>
  )
}

export default SetupForm