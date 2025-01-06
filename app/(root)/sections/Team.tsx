import TeamCard from "@/components/team/TeamCard";
import React from "react";

const Team = () => {
  return (
    <section className="main-container !py-[100px] space-y-[60px]">
      <div>
        <h1 className="h2">Meet our team</h1>
        <p className="lead">
          Get to know the faces behind the scenes and learn about the values
          that drive us.
        </p>
      </div>
      <div className="space-y-[60px]">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
};

export default Team;
