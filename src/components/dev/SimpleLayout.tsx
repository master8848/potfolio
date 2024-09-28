import { TracingBeam } from "../ui/tracing-beam";
import { Container } from "./Container";

export function SimpleLayout({ title, intro, children, resetval }) {
  return (
    <TracingBeam key={resetval} className="px-6">
      <div className="pb-16 ">
        <Container className=" py-16 px-4 rounded-3xl cntColor">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold   tracking-tight  sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-base ">{intro}</p>
          </header>
          <div className="mt-16 sm:mt-20">{children}</div>
        </Container>
      </div>
    </TracingBeam>
  );
}
