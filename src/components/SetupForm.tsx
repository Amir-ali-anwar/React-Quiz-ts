import FormRow from "./FormRow";
import Button from "./Button";
type SetupFormProps={
  amount:number,
  category:string,
  difficulty:string,
  handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit:React.MouseEventHandler<HTMLButtonElement>
}
const SetupForm:React.FC<SetupFormProps> = ({amount,category,difficulty,handleChange,handleSubmit}) => {

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
            value={amount}
            name="amount"
          />
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              onChange={handleChange}
              value={category}
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
              value={difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          <button className='submit-btn' onClick={handleSubmit}>start</button>
          {/* <Button className='submit-btn' handleChange={handleChange}>start</Button> */}
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
