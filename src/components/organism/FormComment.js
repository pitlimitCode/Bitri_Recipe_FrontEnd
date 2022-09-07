import {
  Form,
  Button,
  Alert
} from 'react-bootstrap';
import React from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function FormComment(props) {
  // const search = useLocation().search;
  const getProps = props;
  // console.log(getProps);
  const recipe_id = getProps.recipeId;
  // let navigate = useNavigate();

  // const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [Comment, setComment] = React.useState("");

  const handleNewComment = () => {
    // setIsLoading(true);
    axios
      .post(process.env.REACT_APP_BE_URL + "/comments/add", {
        id_recipe: recipe_id,  
        comment_text: Comment, 
      })
      .then((res) => {
        setIsError(false);
        console.log(res);

        if (res.data.message == 'jwt expired'){
          // console.log('expire woi');
          setIsError(true);
          setErrorMsg("Your out of Time autentification, please Logout then Login again");
        } else {
          // navigate(``);
          window.location.reload();
        }

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
      {/* Alert error message */}
      {isError 
        ? <Alert variant="danger" className="text-center">{errorMsg}</Alert> 
        : null
      } 
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