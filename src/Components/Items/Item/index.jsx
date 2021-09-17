import React from 'react';
import styled from 'styled-components';
import ImageFilter from '../../ImageFilter';

const ItemArea = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius : 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight : bold
  }
`;

export default ({ dataItem, ...props }) => {

  return (
    <ItemArea>
      <span>
        {ImageFilter(dataItem.type)}
      </span>
      <Item>
        <span className="text">{dataItem.type}</span>
        <span>{dataItem.from}</span>
        <span>{dataItem.value}</span>
      </Item>
      <span>{dataItem.date}</span>
    </ItemArea>
  );
}
