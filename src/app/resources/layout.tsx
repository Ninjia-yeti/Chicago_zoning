import { ResourceSideBar } from "@/components/resources/resourceSideBar";
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-4">
      <div>
        <ResourceSideBar />
      </div>
      <div className="col-span-3">{children}</div>
    </section>
  );
}
