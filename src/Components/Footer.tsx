export function Footer() {
  return (
    <div className="flex px-8 py-4 items-center justify-right h-16">
      <p className="text-sm text-slate-500">
        © Éric Létourneau {new Date().getFullYear()}
      </p>
    </div>
  );
}
