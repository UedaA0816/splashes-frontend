import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const FallbackLoader = () => {
  return (
    <FallbackContainer>
      <Loader type="Oval" color="gray" />
    </FallbackContainer>
  )
}

export default FallbackLoader

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`