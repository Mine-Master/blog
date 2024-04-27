import { Wrapper } from './styles'

export const ThreeDotLoading = props => {
  return (
    <Wrapper {...props}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  )
}
