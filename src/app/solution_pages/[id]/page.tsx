import ServiceDetailClient from './ServiceDetailClient';
import { serviceDetails } from "@/lib/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    id: service.id,
  }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return (
    <div>
      <ServiceDetailClient id={id} />
    </div>
  );
}
