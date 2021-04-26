import * as React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

interface BaseProps {
  marginRight?: string
  marginLeft?: string
  maxWidth?: string
  paddingRight?: string
  paddingLeft?: string
}

const BaseWrapper: React.FC<BaseProps> = ({
  children,
  ...properties
}): JSX.Element => React.createElement('div', properties, children)

const Wrapper = styled(BaseWrapper)`
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 'auto')};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '960px')};
  padding-right: ${({ paddingRight }) =>
    paddingRight ? paddingRight : '10px'};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '10px')};
`

Wrapper.defaultProps = {
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '960px',
  paddingRight: '10px',
  paddingLeft: '10px',
}

Wrapper.propTypes = {
  marginRight: PropTypes.string,
  marginLeft: PropTypes.string,
  maxWidth: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
}

export default Wrapper
