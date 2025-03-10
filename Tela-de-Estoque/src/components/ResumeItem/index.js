import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
      <C.Total>{value}</C.Total>
      </C.Header>
      <C.HeaderTitle>{title}</C.HeaderTitle>
    </C.Container>
  );
};

export default ResumeItem;