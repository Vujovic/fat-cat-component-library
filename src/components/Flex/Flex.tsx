import * as React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

interface BaseProps {
  flexDirection?: string
  flexWrap?: string
  flexBasis?: string
  flexGrow?: number
  flexShrink?: number
  alignItems?: string
  justifyContent?: string
}

const BaseFlex: React.FC<BaseProps> = ({
  children,
  ...properties
}): JSX.Element => React.createElement('div', properties, children)

const Flex = styled(BaseFlex)`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : 'wrap')};
`

Flex.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  alignItems: 'stretch',
  justifyContent: 'flex-start',
}

Flex.propTypes = {
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
}

export default Flex
