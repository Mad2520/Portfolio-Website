
export function CVPage() {
  return (
    // embed the downloadable CV directly, filling the viewport
    <object
      data="/CV.pdf#zoom=page-width"
      type="application/pdf"
      width="100%"
      height="100%"
      style={{ minHeight: '100vh' }}
    >
      <p className="text-center p-4">
        Votre navigateur ne peut pas afficher le PDF. <a href="/CV.pdf" className="underline">Télécharger</a>.
      </p>
    </object>
  );
}
