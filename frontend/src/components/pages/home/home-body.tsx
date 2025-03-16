import ButtonLink from "../../buttons/button-link";

const HomeBody = () => {
  return (
    <main className="sm:flex items-center justify-center gap-3 text-primary-teal">
      <section className="mb-10 space-y-4">
        <h1 
          className="text-3xl md:text-5xl font-bold"
        >Smarter Plans, Stronger Grades—AI Your Way!</h1>
        <p>
          Your personal AI study buddy—PlanSmart AI creates tailored 
          schedules, exam plans, and study tips in seconds. 
          Pick your needs, get a plan, and ace your goals!
        </p>
        <ButtonLink link="new-plan/goal" text="Try Now"></ButtonLink>
      </section>
      <div className="img-holder sm:min-w-1/3 flex sm:block justify-center">
        <img src="./src/assets/svg/main-image.svg" alt="description image." />
      </div>
    </main>
  );
};

export default HomeBody;
