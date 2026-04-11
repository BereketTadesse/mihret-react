const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Add import
content = content.replace(
  "import { itemVariants, itemVariantsReduced } from '../components/animations/index';",
  "import { itemVariants, itemVariantsReduced } from '../components/animations/index';\nimport { CATEGORIES } from '../data/projects';"
);

// Add data logic
content = content.replace(
  "  const [isShowreelOpen, setIsShowreelOpen] = useState(false);",
  "  const [isShowreelOpen, setIsShowreelOpen] = useState(false);\n  \n  const allProjects = CATEGORIES.flatMap(c => c.projects.map(p => ({ ...p, categoryId: c.id })));\n  const homeFeatured = allProjects.filter(p => p.featured);\n  const displayProjects = homeFeatured.length >= 3 ? homeFeatured.slice(0, 3) : allProjects.slice(0, 3);\n  const mainProject = displayProjects[0];\n  const sideProject1 = displayProjects[1];\n  const sideProject2 = displayProjects[2];"
);

// Replace JSX blocks: StaggerChildren
const startStr = "        <StaggerChildren\r\n          staggerDelay={0.1}\r\n          className=\"grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]\"\r\n        >";
const endStr = "        </StaggerChildren>";

const startIndex = content.indexOf("<StaggerChildren\r\n          staggerDelay={0.1}");
const endIndex = content.indexOf("</StaggerChildren>", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newJsx = `<StaggerChildren
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]"
        >
          {mainProject && (
            <motion.div
              variants={iv}
              onClick={() => navigate(\`/portfolio/\${mainProject.categoryId}/\${mainProject.slug}\`)}
              className="md:col-span-8 group relative overflow-hidden bg-black rounded-lg shadow-2xl cursor-pointer flex items-center justify-center border border-white/5"
            >
              <img
                className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.02]"
                alt={mainProject.title}
                src={mainProject.images[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end pointer-events-none">
                <div className="space-y-3 md:space-y-4">
                  <span className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] text-primary font-bold tracking-widest uppercase border border-primary/20">{mainProject.type}</span>
                  <h4 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none">{mainProject.title}</h4>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">arrow_forward</span>
              </div>
            </motion.div>
          )}

          <motion.div variants={iv} className="md:col-span-4 flex flex-col gap-6">
            {sideProject1 && (
              <div 
                onClick={() => navigate(\`/portfolio/\${sideProject1.categoryId}/\${sideProject1.slug}\`)}
                className="flex-1 group relative overflow-hidden bg-black rounded-lg shadow-xl cursor-pointer flex items-center justify-center border border-white/5"
              >
                <img
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  alt={sideProject1.title}
                  src={sideProject1.images[0]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2 drop-shadow-md">{sideProject1.type}</span>
                  <h4 className="text-xl font-black font-headline tracking-tight uppercase drop-shadow-lg leading-tight">{sideProject1.title}</h4>
                </div>
              </div>
            )}
            
            {sideProject2 && (
              <div 
                onClick={() => navigate(\`/portfolio/\${sideProject2.categoryId}/\${sideProject2.slug}\`)}
                className="flex-1 group relative overflow-hidden bg-black rounded-lg shadow-xl cursor-pointer flex items-center justify-center border border-white/5"
              >
                <img
                  className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-[1.03]"
                  alt={sideProject2.title}
                  src={sideProject2.images[0]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2 drop-shadow-md">{sideProject2.type}</span>
                  <h4 className="text-xl font-black font-headline tracking-tight uppercase drop-shadow-lg leading-tight">{sideProject2.title}</h4>
                </div>
              </div>
            )}
          </motion.div>
        `;
  content = content.substring(0, startIndex) + newJsx + content.substring(endIndex);
}

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Update successful');
