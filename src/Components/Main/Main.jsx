import React from 'react'
import image from '../../Assets/verify.png'
import {motion , useScroll} from 'motion/react'
function Main() {
  const {scrollXProgress} = useScroll()
  return (
    <div className='flex-1 z-0  scroll-auto'>
      <motion.div></motion.div>
      <div className="h-[600px] w-full border border-black">
      <div className="h-full flex flex-col  ">
        <div className="overflow-y-auto flex-1 scrollbar-hidden">
          <div className="h-lvh w-full grid place-items-center z-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis libero a harum mollitia, aliquam perspiciatis obcaecati enim minus dolorem eius, ducimus ea eveniet sint dolorum! Ab blanditiis, omnis repellat neque qui accusantium. Officiis porro hic quia natus animi nostrum facere deleniti voluptate nam, consectetur, illum at velit quis magnam reprehenderit nesciunt rerum incidunt itaque exercitationem sint. Alias sapiente voluptate excepturi impedit illo, optio voluptatum, modi, id est non repellendus quisquam voluptatibus dolorem molestiae quasi saepe enim dicta doloribus. Dolor veniam inventore aliquid ipsa dicta, porro tempora, sint quam repudiandae sed aspernatur eaque excepturi similique natus consectetur quas, cupiditate nam et? Porro vel totam aliquid pariatur quo cumque architecto explicabo iure voluptatibus dolore ducimus obcaecati minus vitae harum amet accusamus nesciunt quasi odio tempora adipisci sunt, soluta rerum placeat numquam? Assumenda repellendus incidunt corrupti. Quibusdam sapiente architecto animi harum fugit, laboriosam sequi odio doloremque nam cum tempore? Atque maxime minima aliquid ducimus ab, iure magni officia sunt, unde quidem reiciendis iusto consequatur nihil quae odit adipisci, totam delectus corporis vitae. Ex blanditiis dolorem reprehenderit excepturi. Quos, suscipit at non doloribus qui, minus maxime natus eaque laudantium hic reiciendis ut iusto vitae quasi ex corrupti, fugiat neque nemo animi aliquid quibusdam? Quos deleniti suscipit rem et dolorum natus earum, fugit explicabo fuga possimus consequatur eum fugiat laudantium non exercitationem optio minima architecto, quas iure quae asperiores ipsam adipisci tempora! Ipsa corporis quo animi et? Explicabo possimus hic nulla eaque dolores suscipit maiores nobis soluta molestias libero enim eum ut tempora, ea illo dolore, earum recusandae vel facere? Reiciendis dolor magnam suscipit porro dolores voluptatum quae dignissimos! Non tempora soluta perferendis tempore suscipit maiores natus eligendi itaque minus dolorem quaerat magnam voluptates esse quam laudantium distinctio debitis labore illo repellendus voluptatibus, nesciunt rerum atque velit ad. Quos beatae dolorem et molestias ducimus esse commodi maxime reiciendis nisi? Velit exercitationem qui dolores distinctio fugit alias ut deleniti minus? Esse, ex fuga voluptatum asperiores consectetur vel nostrum eum? Asperiores a, dolor incidunt ea quidem ad rerum accusantium magnam? Recusandae vitae facilis ut delectus eum, temporibus soluta beatae cupiditate quo deserunt, repellendus quos tempora officia voluptate nemo ratione! Nesciunt sint quasi libero quis optio, obcaecati a iste doloremque! Rem laboriosam distinctio aliquam tenetur! Autem, magni. Adipisci, modi quasi? Ex, numquam aliquam! Incidunt quisquam minima vel nihil possimus libero laborum, quidem ex, omnis ipsum fugit laboriosam corrupti. Repellendus dicta optio laborum totam soluta illum similique, quae ab aperiam maxime laboriosam, corporis, unde quod error molestias. Sequi, libero! Laboriosam cumque numquam, odio earum ducimus sint obcaecati! Minus consectetur, blanditiis aut qui iure harum voluptates nesciunt doloribus eveniet saepe tempora distinctio perspiciatis deleniti. Quos officia qui quidem voluptates esse dolorum itaque eum quisquam ut non laudantium laborum incidunt, commodi, ipsum nihil sed eligendi adipisci modi animi doloribus nisi velit voluptas tenetur temporibus. Nostrum provident optio dignissimos saepe ullam, velit, soluta ipsam et assumenda officia temporibus adipisci modi! Voluptate totam consequuntur praesentium quibusdam culpa quo eos nisi corrupti eum ducimus quis, aspernatur labore ea sunt sit ipsa nam. Ea, quasi!
          </div>
           <div className="h-lvh w-full grid place-items-center z-0">Section 1</div>
          <div className="h-lvh w-full grid place-items-center z-0">Section 1</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main