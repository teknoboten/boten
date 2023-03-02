import Container from '@mui/material/Container'
import Summary from './Summary'
import Skills from './Skills'
import ProjectsContainer from './ProjectsContainer'
import JorbsContainer from './JorbsContainer'
import SchoolContainer from './SchoolConatiner'
import Footer from './Footer'

function Resume() {
  return (
    <Container>
      <Summary />
      <Skills />
      <ProjectsContainer />
      <JorbsContainer />
      <SchoolContainer />
      <Footer />
    </Container>
  )
}

export default Resume
