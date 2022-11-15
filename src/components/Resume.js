import Container from '@mui/material/Container'
import Summary from './Summary'
import Header from './Header'
import Skills from './Skills'
import ProjectsContainer from './ProjectsContainer'
import JorbsContainer from './JorbsContainer'

function Resume() {
  return (
    <Container>
      <Summary />
      <Skills />
      <ProjectsContainer />
      <JorbsContainer />
    </Container>
  )
}

export default Resume
/* <div>
  <LayoutGroup>
    <Expander title="about me" />
    <Expander title="technical skills" />
    <Expander title="recent projects" />
    <Expander title="employment history" />
  </LayoutGroup>
</div> */
