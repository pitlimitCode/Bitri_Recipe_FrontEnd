import React from "react";
// import axios from "axios";
import { 
  Row, 
  // Pagination,
} from 'react-bootstrap';
import NavbarPage from "../components/organism/NavbarPage";
import FooterTop from "../components/organism/FooterTop";
import FooterBottom from "../components/organism/FooterBottom";
import HomeSearchRecipe from '../components/organism/HomeSearchRecipe';
import HomeNewestRecipe from '../components/organism/HomeNewestRecipe';
import HomeAllRecipe from '../components/organism/HomeAllRecipe';

function LandingPage() {
  // const [listPhoto, setListPhoto] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);

  // React.useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     window.location.href = "/login";
  //   }
  // }, []);

  // React.useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => {
  //       setListPhoto(res.data);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 10000);
  //     });
  // }, []);

  return (
    <div className='landingPage'>

      <NavbarPage />
      
      <Row className="mb-5">
        <HomeSearchRecipe />
      </Row>

      <Row className="mb-4">
        <h4>New Recipe</h4>
      </Row>
      <Row className="mb-5">
        <HomeNewestRecipe />
      </Row>

        {/* <Row>
          {isLoading ? (
            <>
              {[...Array(6)]?.map(() => (
                <Col lg={4}>
                  <CardImage image={ "https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" }/>
                </Col>
              ))}
            </>
          ) : (
            <>
              {listPhoto?.map((item) => (
                <Col lg={4}>
                  <CardImage image={item?.url} title={item?.title} />
                </Col>
              ))}
            </>
          )}
        </Row> */}

      {/* Harusnya pagination semua recipe yang ada*/}
      <Row className="mb-4">
        <h4>All recipe</h4>
      </Row>
      <Row className="mb-4">
        <HomeAllRecipe />
      </Row>


      {/* <Row>
        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
          items.push(
            <Pagination.Item key={number} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        }

        const paginationBasic = (
          <div>
            <Pagination>{items}</Pagination>
            <br />

            <Pagination size="lg">{items}</Pagination>
            <br />

            <Pagination size="sm">{items}</Pagination>
          </div>
        );
        render(paginationBasic);
      </Row> */}

      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default LandingPage;