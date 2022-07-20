import React from 'react'
import { 
  Row,
  Col,
  Image,
} from 'react-bootstrap'

import compImage from './image/exCompLogo.png';

export default function JobsExp() {
	return (
    <div className="jobsExpPage">
			<Row className="mb-4">
				<Col sm={2}>
						<Image src={compImage}/>
				</Col>
				<Col sm={10}>
						<div className="theTitle">Engineer</div>
						<div className="theComp">Tokopedia</div>
						<div className="theDate mb-3">July 2019 - January 2020 6months</div>
						<div className="theDesc mb-1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						</div>
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
						<Image src={compImage}/>
				</Col>
				<Col sm={10}>
						<div className="theTitle">Engineer 2</div>
						<div className="theComp">Tokopedia 2</div>
						<div className="theDate mb-3">July 2019 - January 2020 6months</div>
						<div className="theDesc mb-1">
							2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						</div>
				</Col>
			</Row>
		</div>
	)
}
