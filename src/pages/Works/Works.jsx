import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import PageTitle from '../../components/PageTitle/PageTitle';
import mockup from '../../assets/mockup.png';
import Project from '../../components/Project/Project';
import './Works.scss';

function Works() {
  return (
    <DefaultPage>
      <PageTitle title='TRABALHOS' subtitle='REALIZADOS' />
      <Project 
        image={mockup}
        title='Título do Projeto' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor felis. Maecenas id lacus libero. Sed ac sem tempor, sollicitudin eros sed, dignissim mi. Curabitur tincidunt diam vel augue sollicitudin, ac pulvinar est vestibulum.'
      />
    </DefaultPage>
  )
}

export default Works