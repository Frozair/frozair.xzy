export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
}