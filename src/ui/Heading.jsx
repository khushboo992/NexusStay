import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.h1`
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
    `}

  ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

     ${({ as }) =>
    as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
`;

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3"]),
};

export default Heading;
