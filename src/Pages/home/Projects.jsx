import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { data: allprojects, isLoading, error } = useQuery({
    queryKey: ["allprojects"],
    queryFn: async () => {
      const { data } = await axios.get("projects.json");
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const fullstack = allprojects?.filter((p) => p?.category === 'Fullstack');
  const frontend = allprojects?.filter((p) => p?.category === 'Front-end');
  const all = allprojects;

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-4xl border-b-2 border-green-500 pb-3 px-6 w-fit font-bold leading-none lg:text-6xl sm:text-4xl container lg:mx-auto md:mx-auto">
        Projects
      </h1>

      <div>
        <Tabs>
          <div className="w-fit mx-auto my-6">
            <TabList>
              <Tab>Full Stack</Tab>
              <Tab>Front-end</Tab>
              <Tab>All Projects</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 px-6">
              {fullstack?.map((project) => (
                <ProjectsCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 px-6">
              {frontend?.map((project) => (
                <ProjectsCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 px-6">
              {all?.map((project) => (
                <ProjectsCard key={project.id} project={project} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
