import React from "react";
import { motion } from "framer-motion";
import { useSection } from "../../Context/SectionContext.jsx";

function Main() {
  const { sectionRef, listContents } = useSection();

  return (
    <div className="flex-1 z-0 scroll-auto md:p-4">
      <div className="h-full w-full">
        <div className="h-full flex flex-col">
          <div className="overflow-y-auto flex-1 scrollbar-hidden pb-10">
            {listContents ? listContents.map((items) => {
              // ❌ Hide Profile if not mobile

              return (
                <motion.div
                  key={items.id}
                  initial={{ opacity: 0, y: items.id === "About" ? 60 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: items.id === "About" ? 1.2 : 1 }}
                >
                  <div
                    ref={(el) => (sectionRef[items.id] = { current: el })}
                    className="min-h-lvh w-full z-0"
                  >
                    {items.components && <items.components />}
                  </div>
                </motion.div>
              );
            }) : <h1>No item</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
