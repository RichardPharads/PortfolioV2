import React from 'react'
import atom from '../../Assets/atom.png'
import github from '../../Assets/github 1.png'
import api from '../../Assets/api.png'
import javascript from '../../Assets/javascript.png'

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
  },  {
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
  }
  ,  {
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
  }
]


function Skills() {
  return (
    <div className=' '>
         <h2 className='py-10 text-2xl'>Skills and Tools</h2>
            <div className='flex gap-2 flex-wrap '>
            {data.map(({id , name , url}) =>(
                <div id={id} className='flex w-fit py-4 px-6 bg-white/10  justify-center items-center gap-4 rounded-xl bg-linear-to-t from-[#101010] from-0% to-[#171717] to-100%  '>
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