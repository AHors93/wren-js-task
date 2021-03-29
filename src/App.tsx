import * as React from "react";
import { useForm } from "react-hook-form";
// I used this as I wanted to submit the sheep to a 'form' and be able to manipulate the data from there, if I were to do this test again, I would take a different approach
import "./App.css";
/**
 * defining the type for the forms data - want to capture a name, gender and branding in the form.
 */
type newSheep = {
  name: string;
  gender: string;
  branded?: boolean;
};

/**
 * With this type I was hoping to assign each sheep as an object, which I could then iterate through for branding, with a random generator
 */
type sheepState = {
  newSheep: {};
};

export const App = () => {
  const { register, handleSubmit, errors } = useForm<newSheep, sheepState>();

  const onSubmit = (data: newSheep) => {
    console.log("Sheep", data); // I have a question about how I could render this onto the screen, so you could actually see the sheep rather than in the console
  };

  return (
    <div className="sheep-field">
      <header className="sheep-field-header">
        <h1>The Field</h1>
        <footer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <div className="error">Please enter sheep's name</div>
              )}
            </div>
            <div className="field">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                name="gender"
                ref={register({ required: true })}
              />
              {errors.gender && errors.gender.type === "required" && (
                <div className="error">
                  Ooops looks like you missed something..
                </div>
              )}
            </div>
            {/* With this I tried to bring in a drop down menu to select the gender of the sheep, but I couldn't add it to the object once i submitted a new sheep. Reverted to a simpler method, but would like to understan how this could be done.
            <div className="form-selector">
              <label htmlFor="gender">Gender:</label>
              <select
                id="type"
                name="gender"
                ref={register({ required: true })}
              >
                <option value="">Please Select</option>
                <option value="invoice">Male</option>
                <option value="payment">Female</option>
              </select>
            </div> */}
            <button type="submit">Add Sheep</button>
            <button type="reset">Add New Sheep</button>
          </form>
        </footer>
      </header>
    </div>
  );
};

/**
 * Please note - any comment would be welcome on this, but I wonder if this would have been a better way to approach the task?
 * 
 * const App = () => {
  const [sheep, setSheep] = useState([ name: '', gender: '']);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sheep.name && sheep.gender) {
      const newSheep = sheep;
    }
  }
}
This way, I could assign each sheep to an array, and iterate through to find gender which would allow me to set logic for a random generator for breeding
 */
