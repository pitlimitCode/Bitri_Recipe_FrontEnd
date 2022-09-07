import React from "react";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  Nav,
  Card,
	Spinner,
  Form,
} from 'react-bootstrap';
// import { Link } from "react-router-dom";

export default function HomeAllRecipe() {
  const [isLoading, setIsLoading] = React.useState([]);
  const [listData, setListData] = React.useState([]);
  const linkRecipe = process.env.REACT_APP_FE_URL + "/detailrecipe/?id=";
  
  
  const [SortBy, setSortBy] = React.useState("desc");
  const [Page, setPage] = React.useState(1);
  const limitPerPage = 6;
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_BE_URL}/recipes/pagination/?limit=${limitPerPage}&pages=${Page}&sort=${SortBy}`)
    // axios.get(process.env.REACT_APP_BE_URL + "/recipes/all/?sort=desc")
      .then((res) => {
        setListData(res.data.result.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 1500
      });
  }, [SortBy, Page])

  // console.log(listData);

  return (
    <>
      <Row>
        {isLoading 
          ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              {/* SELECT - SORT BY */}
              <Row className="mb-5 position-relative">
                <Form.Select 
                  aria-label="Default select example" 
                  style={{width:"200px"}} 
                  className="position-absolute top-0 start-50 translate-middle"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="desc">Newest</option>
                  <option value="asc">Older</option>
                </Form.Select>
              </Row>

              {/* RESULT SORT BY */}
              <Row>
                {listData.map(data => (
                  <Col key={data.id} xs={6} md={4} className ="parentImagePages mb-4">
                  <Card className="pic100">
                    <Nav.Link href= {`${linkRecipe}${data.id}`}>
                      <Image 
                        src={`${process.env.REACT_APP_BE_URL}/${data.image}`} 
                        className="picImagePages" 
                        alt="search pic"
                      />
                    </Nav.Link>
                    <div className="bottom-left-text">{data.name}</div>
                  </Card>
                  </Col>
                ))}
              </Row>
            </>
          )
        }
      </Row> 
			<Row>
				<Col sm={5} />
				<Col sm={2}>
					<div className='text-center mt-2'>
						<Form onSubmit={(e) => e.preventDefault()}>
							<Form.Control 
                type="number"
                min={1}
                placeholder="1 Page"
                onChange={(e) => setPage(e.target.value)} />
						</Form>
					</div>
				</Col>
				<Col sm={5} />
			</Row>
    </>
  );
}