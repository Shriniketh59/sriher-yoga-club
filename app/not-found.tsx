import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Lotus } from "@/components/ui/Lotus";

export default function NotFound() {
  return (
    <section className="bg-sunrise grid min-h-[80svh] place-items-center px-5 pt-32 text-center">
      <div>
        <Lotus className="mx-auto h-10 w-20 text-sunset" />
        <h1 className="mt-6 text-5xl">Page not found</h1>
        <p className="mt-4 text-ink-soft">Take a slow breath — then let’s guide you back.</p>
        <ButtonLink href="/" className="mt-8" icon={<ArrowRight className="size-4" aria-hidden />}>
          Return home
        </ButtonLink>
      </div>
    </section>
  );
}
