import TestimonialCard from "@/components/testimonials/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="main-container bg-secondary-s1 !py-[100px] space-y-[60px]">
      <div>
        <h1 className="h2">Real Stories from Satisfied Customers</h1>
        <p className="lead">
          See how our landing page ui kit is making an impact.
        </p>
      </div>
      <div className="space-y-[60px]">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
