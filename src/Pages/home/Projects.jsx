import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { data: allprojects, isLoading, error } = useQuery({
    queryKey: ["allprojects"],
    queryFn: async () => {
      const { data } = await axios.get("projects.json");
      return data;
    },
  });

  if (isLoading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-xl text-red-500">Error: {error.message}</div>;

  return (
    <div id="projects" className="container mx-auto my-20 px-6 lg:px-12">
     <div className="max-w-2xl mx-auto text-center space-y-2 mb-8 ">
  <h1 className="text-4xl border-b-4 border-green-500 pb-3 mx-auto 
    w-fit font-extrabold leading-tight text-white lg:text-5xl sm:text-4xl 
    mb-2 uppercase tracking-wide">
    My Projects
  </h1>
  <p className="text-gray-200 text-lg">
  Discover my top projects, built with modern tech and a passion for clean, functional design.
  </p>
</div>


      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {allprojects?.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
