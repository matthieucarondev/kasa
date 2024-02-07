import React, { useEffect } from 'react'
import DropDown from '../../components/dropdown/Dropdown'
import Banner from '../../components/banner/Banner'
import './About.css'

function About() {
  //met a jour le titre du document
  useEffect(() => {
    document.title = 'kasa- À propos'
  });
  const aboutData = [
    {
      id: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      id: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: 'Service',
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 'Responsabilité',
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <section className='About'>
      <Banner />
      <article className="about-dropdown">
      {aboutData.map((data) => (
      <DropDown key={data.id}
      title={data.id}
      description={data.description}
    />
      ))}
      </article>
    </section>
  )
}

export default About
