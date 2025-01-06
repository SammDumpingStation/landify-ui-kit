import ProjectCard from "@/components/selected-works/ProjectCard";

const SelectedWorks = () => {
  return (
    <section className="main-container space-y-[30px]">
      <div>
        <h2 className="h3">Selected Works</h2>
        <p className="lead">
          Explore our portfolio and see the latest projects that we've brought
          to life.
        </p>
      </div>
      <div className="space-y-[30px] grid grid-cols-1 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default SelectedWorks;
