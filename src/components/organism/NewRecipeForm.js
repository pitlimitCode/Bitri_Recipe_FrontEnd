import { 
  Button, 
  Form,
  Alert,
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

function NewRecipeForm() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [ingre, setIngre] = React.useState("");
  const [steps, setSteps] = React.useState("");

  const handleNewRecipe = () => {
    setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BE_URL + "recipes/add", {
        // image: image,
        name: title,
        ingredients: ingre,
        step: steps,
      })
      // .then((res) => {
      //   setIsError(false);
      //   window.location.href = "/";
      // })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Form>
        {/* Alert error message */}
        {isError 
          ? <Alert variant="danger">{errorMsg}</Alert> 
          : null
        } 

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="file" placeholder="Input Recipe Image (under maintenance)" rows={8} 
            // onChange={(e) => setImage(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3"controlId="exampleForm.ControlTextarea1">
          <Form.Control type="name" placeholder="Title of Recipe" 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Ingredients" rows={6} 
            onChange={(e) => setIngre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeholder="Steps" rows={5} 
            onChange={(e) => setSteps(e.target.value)}
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="button" 
          disabled={isLoading}
          onClick={handleNewRecipe}
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </>
  );
}

export default NewRecipeForm;