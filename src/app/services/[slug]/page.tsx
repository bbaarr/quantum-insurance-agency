import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";
import { servicePages } from "@/lib/site-content";

interface ServiceRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "השירות לא נמצא | קוואנטום",
      description: "מידע על שירותי קוואנטום בתחום התכנון הפיננסי והביטוח.",
    };
  }

  const title = `${service.title} | קוואנטום`;
  const description = `בקוואנטום אפשר לבחון יחד: ${service.summary} לתיאום שיחה, צרו קשר עם המשרד.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "קוואנטום",
    },
  };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
