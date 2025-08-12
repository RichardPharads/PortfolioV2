import React from 'react'
import atom from '../../Assets/atom.png'
import github from '../../Assets/github 1.png'
import api from '../../Assets/api.png'
import javascript from '../../Assets/javascript.png'
import docker from '../../Assets/docker.png'
import node from '../../Assets/programing.png'
import css from '../../Assets/css.webp'
import html from '../../Assets/html.png'
import python from '../../Assets/python.png'
import mongoDB from '../../Assets/mongoDb.png'
import typescript from '../../Assets/Typescript.png'
import tailwind from '../../Assets/tailwind.svg'
import figma from '../../Assets/figma.png'
import postman from '../../Assets/postman-icon.png'
const data = [
  {
    id:1,
    name:"Javascript",
    url:javascript
  },
  {
    id:2,
    name:"React JS",
    url:atom
  },
  {
    id:3,
    name:"API",
    url:api
  },{
    id:4,
    name: "Docker",
    url: docker
  },{
    id:5,
    name: "Node JS",
    url: node
  }
  ,{
    id:6,
    name: "HTML",
    url: html
  },{
    id:7,
    name: "CSS",
    url: css
  },{
    id:8,
    name: "Python",
    url: python
  },{
    id:9,
    name: "MongoDB",
    url: mongoDB
  },{
    id:10,
    name: "Typescript",
    url: typescript
  },{
    id:11,
    name: "Tailwind CSS",
    url: tailwind
  },{
    id:12,
    name: "Figma",
    url: figma
  }
  ,{
    id:13,
    name: "Postman",
    url: postman
  }

]


function Skills() {
  return (
    <div className=' '>
         <h2 className='py-10 text-2xl'>Skills and Tools</h2>
            <div className='flex gap-2 flex-wrap '>
            {data.map(({id , name , url}) =>(
                <div key={id} id={id} className='flex w-fit hover:scale-105 duration-500 cursor-pointer py-4 px-6 bg-white/10 justify-center items-center gap-4 rounded-xl bg-linear-to-t from-[#101010] from-0% to-[#171717] to-100%  '>
                <div className='w-[30px] h-[30px]'>
                    <img src={url} alt="" />
                </div>
                <h3 className='text-xl'>{name}</h3>
            </div>
            ))}
         
            
        </div>
    </div>
  )
}

export default Skills