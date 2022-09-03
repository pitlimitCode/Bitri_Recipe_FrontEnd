import {
  Form,
  Button,
} from 'react-bootstrap';
import React from "react";
import axios from "axios";

export default function FormComment(props) {
  // const search = useLocation().search;
  const getProps = props;
  // console.log(getProps);
  const recipe_id = getProps.recipeId;

  // const [isError, setIsError] = React.useState(false);
  // const [errorMsg, setErrorMsg] = React.useState("");
  // const [isLoading, setIsLoading] = React.useState(false);

  const [Comment, setComment] = React.useState("");

  const handleNewComment = () => {
    // setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BE_URL + "/comments/add", {
        id_recipe: recipe_id,  
        comment_text: Comment, 
      })
      .then((res) => {
        // console.log(res);
        // setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsError(true);
        // setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        window.location.href = `${process.env.REACT_APP_FE_URL}/detailrecipe/?id=${recipe_id}`;
        // setIsLoading(false);
      }, []); 
  };

  return (
    <>
    <Form className="mb-5" >
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          onChange={(e) => setComment(e.target.value)}
          placeholder="You can comment to this recipe, here ..." rows={3} 
        />
      </Form.Group>
      <Button 
        variant="primary"
        // type="submit"
        className="button text-cente"
        onClick={handleNewComment}
      >
        Submit
      </Button>
    </Form>
      </>
  );
}