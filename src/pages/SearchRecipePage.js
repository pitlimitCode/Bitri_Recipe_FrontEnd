import React from "react";
import axios from "axios";
import {
	Container,
  Row,
  Col, 
  Button, 
  Form,
  Image,
  Nav,
  Card,
	Spinner,
} from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";

export default function SearchRecipePage() {
  let navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');

  const [isLoading, setIsLoading] = React.useState(true);
  const [listData, setListData] = React.useState([]);
  const linkRecipe = process.env.REACT_APP_FE_URL + "/detailrecipe/?id=";

  const [searching, setSearching] = React.useState([]);
  const linkSearchByName = () => { navigate(`/search/?name=${searching}`); };

  React.useEffect(() => {
		// setIsLoading(false);
		// axios.get(process.env.REACT_APP_BE_URL + "/recipes/name/" + name)
		axios.get(`${process.env.REACT_APP_BE_URL}/recipes/name/?name=${name}&sort=desc`)
			.then((res) => {
				// console.log(res.data);
				if (res.data.result){
					setListData(res.data.result.data);
				} else {
					setListData(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
  }, [name]);
    // console.log(listData);
  return (
    <>
    <NavbarPage/>
		<Container>
			<Row>
				<Col xs={5} md={5}>
					<div className='textLeft mt-5'>
						<Form onSubmit={(e) => e.preventDefault()}>
							<Form.Group className="mb-3" controlId="formSearch">
								<Form.Control type="search" placeholder="Search recipe" onChange={(e) => setSearching(e.target.value)} />
							</Form.Group>
							<Button
								variant="primary"
								type="submit"
								className="button"
								onClick={linkSearchByName}
							> Submit </Button>
						</Form>
					</div>
				</Col>
			</Row>

			<h1 className="text-center my-5"> Result of Recipe has named : `{name}`</h1>
			<Row>
				{isLoading 
					? (
						<div className="text-center">
							<Spinner animation="border" role="status">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					) : (
						(listData.message)
							? ( 
								<p className="text-center"> {listData.message} </p> 
							) : ( 
								listData.map(data => (
									<Col key={data.recipe_id} xs={6} md={4} className ="parentImagePages mb-4">
									<Card className="pic100">
										<Nav.Link href= {`${linkRecipe}${data.recipe_id}`}>
											<Image 
												src={`${data.image_recipe}`} 
												className="picImagePages" 
												alt="search pic"
											/>
										</Nav.Link>
										<div className="bottom-left-text">{data.name_recipe}</div>
									</Card>
									</Col>
								))
							)
					)
				}

			</Row> 
		</Container>
    <FooterTop />
    <FooterBottom />
    </>
  );
}