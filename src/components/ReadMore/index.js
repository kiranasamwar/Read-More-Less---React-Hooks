import {useState} from 'react'

import {
  MainContainer,
  ImageUrl,
  MainHeading,
  Button,
  Paragraph,
  Description,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const OnClickButton = () => setIsReadMore(prevState => !prevState)

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <ImageUrl
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>

      <Button type="button" onClick={OnClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
