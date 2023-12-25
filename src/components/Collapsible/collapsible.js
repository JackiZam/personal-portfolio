import React from 'react';
import { useCollapse } from 'react-collapsed';
import './collapsible.css';
import EducationCard from '../AboutMeCards/EducationCard/education';

const Collapsible = ({ isActive, sectionTitle, component }) => {
    const [isExpanded] = React.useState(isActive);
    const { getCollapseProps, getToggleProps } = useCollapse(isExpanded);
    return (
      <div className='collapsible'> 
        <div className='header' {...getToggleProps()}>
            {sectionTitle}
        </div>
        <div {...getCollapseProps()}>
            <div className='content'>
                {component}
            </div>
        </div>
      </div>
    );
  }
  
  export default Collapsible;