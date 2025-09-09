import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-ink-100">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-ink-900 text-white grid place-items-center font-semibold">AK</div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">Apoorv Kulshrestha</h1>
            <p className="text-xs text-ink-600">Business & Data Analyst • UK (ILR)</p>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <a href="mailto:apoorvmailbox@gmail.com" className="btn btn-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
