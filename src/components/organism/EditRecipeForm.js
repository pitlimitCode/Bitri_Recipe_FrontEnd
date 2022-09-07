import { 
  Row, 
  Col, 
  Image,
  Button, 
  Form,
	Spinner,
  Alert,
} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditRecipeForm(props) {
  const getProps = props;
  const id_recipe = getProps.id_recipe;
  // console.log(id_recipe)
  let navigate = useNavigate();
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isGetLoading, setIsGetLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [recipeName, setRecipeName] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeIngre, setRecipeIngre] = useState("");
  const [recipeSteps, setRecipeSteps] = useState("");
  
  useEffect(() => {
    setIsGetLoading(true);
    axios.get(process.env.REACT_APP_BE_URL + "/recipes/id/" + id_recipe)
      .then((res) => {
        // console.log(res);
        // video: null
        
        // console.log(res.data.data[0]);
        // console.log("ingredients text: ", res.data.data[0].ingredients);
        // console.log(JSON.parse(res.data.data[0].ingredients));

        setRecipeName(res.data.data[0].name);
        setRecipeImage(res.data.data[0].image);
        setRecipeIngre(res.data.data[0].ingredients);
        setRecipeSteps(res.data.data[0].step);
        setIsGetLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e.message)
      })
      .finally(() => {
        setIsGetLoading(false);
      });
  }, []); 

  
  // CHANGE IMAGE RECIPE USER
  const [EditImage, setEditImage] = useState("");
  const formData = new FormData();
  formData.append('id_recipe', id_recipe);
  formData.append('image', EditImage);
  const handleEditImage = () => {
    axios
      .patch(process.env.REACT_APP_BE_URL + "/recipes/editimage", formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err?.response?.data)
      });
  };
  

  const [title, setTitle] = React.useState("");
  const [ingre, setIngre] = React.useState("");
  const [steps, setSteps] = React.useState("");

  const handleEditRecipe = async () => {
    setIsLoading(true);
    await axios
      .patch(process.env.REACT_APP_BE_URL + "/recipes/edit", {
        'id' : id_recipe,
        'name' : title,
        'ingredients' : ingre,
        'step' : steps,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.message == 'jwt expired'){
          setIsError(true);
          setErrorMsg("Your out of Time autentification, please Logout then Login again");
        } else {
          console.log(res);
          navigate(`/detailrecipe/?id=${id_recipe}`);
        }
      })
      .catch((err) => {
        console.log(err);
        // setIsError(true);
        // setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // DELETE THIS RECIPE
  const handleDeleteRecipe = () => {
    axios
      .delete(process.env.REACT_APP_BE_URL + `/recipes/delete/${id_recipe}`)
      .then((res) => { navigate("/"); })
      .catch((err) => { console.log(err?.response?.data) });
  };


  return (
    <>
      <Form>
        {/* Alert error message */}
        {isError 
          ? <Alert variant="danger" className="text-center">{errorMsg}</Alert> 
          : null
        } 

        {isLoading 
          ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
          <Row className='mb-5'>
            <Col md={2}/>

            {/* IMAGE RECIPE */}
            <Col md={8}>
              <div>
                <Image src={`${process.env.REACT_APP_BE_URL}/${recipeImage}`} alt="recipe pic" className="detailRecipeImage center"></Image>
                {/* EDIT IMAGE RECIPE */}
                <input type="file"
                  onChange={(e) => setEditImage(e.target.files[0])} 
                  className="center"
                />
              </div>
            </Col>

            <Col md={2} className="position-relative">
              {/* BUTTON DELETE RECIPE */}
              <Button type="button"
                onClick={handleDeleteRecipe}
                variant="outline-danger"
              >Delete this recipe?</Button>

              {/* CONFIRM UPDATE IMAGE */}
              <Button type="button"
                className="position-absolute bottom-0 start-0"
                onClick={handleEditImage}
                variant="outline-success"
                size="sm"
              >Confirm change image and Refresh page</Button>
            </Col>

          </Row>
          )
        }

        {/* FORM EDIT RECIPE NON-IMAGE */}
        <Form.Group className="mb-3">
          {isGetLoading 
            ? (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Form.Control type="name" defaultValue={recipeName} onChange={(e) => setTitle(e.target.value)} />
            )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" defaultValue={recipeIngre} rows={6} onChange={(e) => JSON.stringify(setIngre(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" defaultValue={recipeSteps} rows={5} onChange={(e) => setSteps(e.target.value)} />
        </Form.Group>

        <Button 
          variant="primary" 
          type="button" 
          className="button center" 
          disabled={isLoading}
          onClick={handleEditRecipe}
        >
          {isLoading ? "Loading..." : "Submit edit"}
        </Button>
      </Form>
    </>
  );
}

export default EditRecipeForm;