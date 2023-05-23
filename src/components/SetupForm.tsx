import FormRow from "./FormRow";
import Button from "./Button";
const SetupForm = () => {
  const handleChange = () => {
    console.log("data");
  };
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('submitted');
    
  }
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h2>setup quiz</h2>
          <FormRow
            labelText="number of questions"
            handleChange={handleChange}
            type="number"
            className="form-input"
          />
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          <Button className='submit-btn' handleChange={handleChange}>start</Button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
