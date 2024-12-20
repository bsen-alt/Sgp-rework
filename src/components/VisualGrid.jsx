import { motion } from "framer-motion";
import gridVid from "../assets/images/constructionVid.mp4";

const gridItems = [
  { id: 1, text: "", description: "" },
  { id: 2, text: "User-Friendly", description: "Seamlessly intuitive." },
  { id: 3, text: "", description: "" },
  {
    id: 4,
    text: "Innovative Design",
    description: "Creativity meets functionality.",
  },
  { id: 5, text: "", description: "" },
  { id: 6, text: "", description: "" },
  { id: 7, text: "", description: "" },
  { id: 8, text: "", description: "" },
  { id: 9, text: "", description: "" },
];

const VisualGrid = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Full background video */}
      <video
        className=" one absolute inset-0 w-full h-full object-cover bg-clip-border"
        autoPlay
        loop
        muted
      >
        <source src={gridVid} type="video/mp4" />
      </video>

      {/* Overlay Grid with Masked Cards */}
      <motion.div
        className="relative grid grid-cols-3 grid-rows-3 gap-4 p-12 h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative w-full h-full aspect-square overflow-hidden rounded-lg flex items-center justify-center vid"
            whileHover={{ scale: 1.05 }}
          >
            {/* Card Content with Clip Path */}
            <div className="absolute inset-0 clip-card bg-black/70">
              {/* This div serves as the masked area for the video */}
              <div className="w-full h-full bg-cover bg-center" />
            </div>

            {/* Text inside the card */}
            {item.text && (
              <div className="relative z-20 text-center">
                <h2 className="text-white font-bold text-lg">{item.text}</h2>
                <p className="text-white text-sm mt-2">{item.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Styles for the clip-path masking effect */}
      <style jsx>{`
        .clip-card {
          clip-path: (5% 5% 5% 5%);
          background-image: url(${gridVid});
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default VisualGrid;
