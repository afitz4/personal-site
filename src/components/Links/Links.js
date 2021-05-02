import React, { Component } from 'react';
import './Links.scss';
import linkedin from '../../image/linkedin.png'
import git from '../../image/git.png'

function Links() {
  const linkMap = [
    {href: "https://www.linkedin.com/in/andrew-fitz/",
     src: linkedin
    },
    {href: "https://github.com/afitz4",
     src: git
    }
  ]
  const links = [];

  for (const [_, value] of linkMap.entries()) {
    links.push(<Link href={value.href} src={value.src} />)
  }

  return (
    <div>
      {links}
    </div>
  )
}

function Link(props) {
  return (
    <a href={props.href}>
      <img className="Logo-image" src={props.src} alt={props.alt ?? 'logo'}/>
    </a>
  )
}

export default Links;