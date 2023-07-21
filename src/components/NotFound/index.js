import {
  FailureViewContainer,
  FailImage,
  FaileHeading,
  FaileNoteText,
} from './styledComponents'

const NotFound = () => (
  <>
    <FailureViewContainer>
      <FailImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <FaileHeading> Page Not Found</FaileHeading>
      <FaileNoteText>
        We are sorry, the page you requested could not be found..
      </FaileNoteText>
    </FailureViewContainer>
  </>
)

export default NotFound
