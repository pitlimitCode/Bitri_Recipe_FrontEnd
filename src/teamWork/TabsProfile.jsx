import React from 'react'

import Porto from "./TabPorto";
import JobsExp from "./TabJobsExp";

export default function NavbarProfile() {
  
  return (
    <>
      <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" checked />
        <label for="tab1" className="tabs__label">Portofolio</label>
        <div className="tabs__content">
          <Porto />
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label for="tab2" className="tabs__label">Job Experiences</label>
        <div className="tabs__content">
          <JobsExp />
        </div>
      </div>
    </>
  )
}