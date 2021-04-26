import * as React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'

interface BaseProps {
  height?: string
  fontWeight?: string
  color?: string
  tag: string
  size?: string
  uppercase?: boolean
}

const BaseText: React.FC<BaseProps> = ({
  tag,
  children,
  ...properties
}): JSX.Element => React.createElement(tag, properties, children)

const Text = styled(BaseText)`
  color: ${({ color }) => (color ? color : 'inherit')};
  font-size: ${({ size }) => (size ? size : 'inherit')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
`

Text.defaultProps = {
  fontWeight: 'normal',
  height: undefined,
  uppercase: false,
  color: 'inherit',
  tag: 'span',
  size: 's',
}

Text.propTypes = {
  fontWeight: PropTypes.string,
  height: PropTypes.string,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
}

export default Text
