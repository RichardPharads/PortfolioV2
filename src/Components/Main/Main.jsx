import React from "react";
import { motion } from "framer-motion"; // ✅ Correct import
import { useSection } from "../../Context/SectionContext.jsx";
function Main() {
  const { sectionRef, listContents } = useSection();
  
  return (
    <div className="flex-1 z-0 scroll-auto p-2 md:p-4">
      <div className="h-[600px] w-full">
        <div className="h-full flex flex-col">
          <div className="overflow-y-auto flex-1 scrollbar-hidden pb-10">
            {listContents ?  listContents.map((items) => (
              <motion.div
                key={items.id}
                
                initial={{ opacity: 0, y: items.id === "About" ? 60 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: items.id === "About" ? 1.2 : 1 }}
              >
                <div
                  ref={(el) => (sectionRef[items.id] = { current: el })}
                  className="min-h-lvh w-full z-0 "
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl border-accent border-2 w-fit p-2">
                    {items.id}
                  </h1>
                  {items.components && <items.components/>}
                </div>
              </motion.div>
            )): <h1>no item </h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
