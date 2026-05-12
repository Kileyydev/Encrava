import { services } from "@/app/data/services";
import { notFound } from "next/navigation";

import TopNavBar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: ServicePageProps) {

  // AWAIT PARAMS
  const { slug } = await params;

  const service = services.find(
    (s) => s.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <TopNavBar />

      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="py-32 border-b border-black/10">

          <div className="max-w-5xl mx-auto px-6">

            <p className="text-sm tracking-[3px] uppercase text-green-700 mb-4">
              ENCRAVA SERVICE
            </p>

            <h1 className="text-5xl font-semibold text-black mb-8">
              {service.title}
            </h1>

            <p className="text-lg text-black/70 leading-relaxed max-w-3xl">
              {service.overview}
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}