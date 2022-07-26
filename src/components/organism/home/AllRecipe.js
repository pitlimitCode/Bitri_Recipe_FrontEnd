import React from "react";
import axios from "axios";
import {
  // Row,
  Col,
  Image,
  Nav,
} from 'react-bootstrap';

import exRecipe1 from '../../../assets/default/exRecipe1.png';
import exRecipe2 from '../../../assets/default/exRecipe2.png';
import exRecipe3 from '../../../assets/default/exRecipe3.png';
import exRecipe4 from '../../../assets/default/exRecipe4.png';
import exRecipe5 from '../../../assets/default/exRecipe5.png';
import exRecipe6 from '../../../assets/default/exRecipe6.png';
import exRecipe7 from '../../../assets/default/exRecipe7.png';

export default function HomeAllRecipe() {

  // const limitItemPerPage = 3;
  // const currentlyInPage = 1;
  // .get("http://localhost:8000/recipes/pagination?limit=" + limitItemPerPage + "&pages" + currentlyInPage)

  // const [isLoading, setIsLoading] = React.useState([]);
  const [listData, setListData] = React.useState([]);
  const [linkRecipe, setLinkRecipe] = React.useState([]);
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_BE_URL + "recipes/show/all")
      .then((res) => {
        // console.log(res.data.data);
        setListData(res.data.data);
        setLinkRecipe("http://localhost:3000/detailrecipe/?id=");

      //   setTimeout(() => {
      //     setIsLoading(false);
      //   }, 10000);
      });
  }, []);

    // console.log(listData);

  return (
    <>
      {/* <Row> */}
        {/* {isLoading ? (
          <>
            {[...Array(6)]?.map(() => (
              <Col lg={4}>
                <Image={ "https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" }/>
              </Col>
            ))}
          </>
        ) : ( */}
          <>
          {/* {[...Array(3)]?.map(() => (
            <Col md={4}>
              <Image src={listData.image} className="pic100" alt="search pic" />
              <div className="bottom-left-text">{listData.name} </div>
            </Col>
            ))} */}
          {listData.map(data => (
            <Col key={data.id} xs={6} md={4} className ="parentImagePages mb-4">
              <Nav.Link 
                href= 
                  {linkRecipe} 
                  // +
                  // {data.id} // tidak bisa ada tambahan variabel di href
              >
                <Image src={data.image} className="picImagePages" alt="search pic"/>
              </Nav.Link>
              <div className="bottom-left-text">{data.name}</div>
            </Col>
            ))}
          </>
        {/* )} */}


        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe7} className="pic100" alt="Recipe on Pagination" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe6} className="pic100" alt="search pic" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe5} className="pic100" alt="search pic" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe4} className="pic100" alt="Recipe on Pagination" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe3} className="pic100" alt="search pic" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe2} className="pic100" alt="search pic" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>
        <Col md={4} className ="parentImagePages mb-4">
          <Image src={exRecipe1} className="pic100" alt="search pic" />
          <div className="bottom-left-text">NAMA RESEPP</div>
        </Col>

      {/* </Row>  */}
    </>
  );
}