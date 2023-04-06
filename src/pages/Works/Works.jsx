import DefaultPage from '../../layout/DefaultPage/DefaultPage';
import PageTitle from '../../components/PageTitle/PageTitle';
import mockup from '../../assets/mockup.png';
import Project from '../../components/Project/Project';
import Blob from '../../components/Blob/Blob';
import './Works.scss';

function Works() {
  return (
    <DefaultPage>
      <PageTitle title='TRABALHOS' subtitle='REALIZADOS' />
      <Blob 
         width='560px'
         height='450px'
         top='0vh'
         left='0vw'
         duration='5s'
      />
      <Blob 
         width='360px'
         height='250px'
         top='20vh'
         right='0vw'
         duration='5s'
      />
      <Project 
        id={0}
        image={mockup}
        title='Título do Projeto' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget auctor felis. Maecenas id lacus libero. Sed ac sem tempor, sollicitudin eros sed, dignissim mi. Curabitur tincidunt diam vel augue sollicitudin, ac pulvinar est vestibulum.'
      />
    </DefaultPage>
  )
}

export default Works