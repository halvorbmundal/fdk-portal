import styled from 'styled-components';

const RequestRow = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 90px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: solid 1px #d5d7d9;
  padding-left: 37px;
  padding-right: 37px;
  align-items: center;
  font-size: 18px;
`;

const RequestsTitleRow = styled.div`
  background-color: #d2eafd;
  height: 57px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 37px;
  padding-right: 37px;
  font-weight: bold;
`;

const RequestTitle = styled.div`
  width: 50%;
  font-weight: bold;
`;

const RequestInfo = styled.div`
  width: 16%;
  display: flex;
  justify-content: center;
`;

export default {
  RequestRow,
  RequestsTitleRow,
  RequestTitle,
  RequestInfo
};