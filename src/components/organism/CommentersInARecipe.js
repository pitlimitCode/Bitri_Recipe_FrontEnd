import { 
    Row, 
    Col, 
    Image,
  } from 'react-bootstrap';
  
  import React from 'react';
  import axios from "axios";
  
  export default function CommentersInARecipe(props) {
		// const search = useLocation().search;
    const getProps = props;
		const id = getProps.recipeId;
		const [listData, setListData] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(process.env.REACT_APP_BE_URL + "/comments/new?id_recipe=" + id + "&sort=desc")
				.then((res) => {
          // console.log(res);
          if (res.data.result){
            setListData(res.data.result.data);
          } else {
            setListData(false);
          }
        })
        .catch((e) => console.log(e.message))
      }, []); 
      
    return (
			<>
        {listData 
          ?
          listData.map(data => 
            <Row key={data.id} className='mb-3'>
              <Col sm={1} className='me-3'>
                <Image 
                  src={`${process.env.REACT_APP_BE_URL}/${data.avatar}`} 
                  // id='avatarDetailRecipe'
                  width='60px'
                  height='60px'
                  style={{
                    borderRadius:'50%',
                    objectFit:'cover',
                  }}
                />
              </Col>
              <Col>
                <h5 className="textLeft">{data.name}</h5>
                <h6 className="textLeft">{data.comment_text}</h6>
              </Col>
            </Row>
          )
          : <p className='text-center'>No comment history</p>
        }
			</>
    );
  }