
export default function Page() {
  return (
    <main className="prose mx-auto px-4 py-12">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toISOString().slice(0,10)}</p>
      <p>Use of this site constitutes acceptance of these terms.</p>
    </main>
  );
}
