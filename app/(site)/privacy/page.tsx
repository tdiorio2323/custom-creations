
export default function Page() {
  return (
    <main className="prose mx-auto px-4 py-12">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toISOString().slice(0,10)}</p>
      <p>We collect only what is necessary to operate this website.</p>
    </main>
  );
}
