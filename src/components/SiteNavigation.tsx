import Link from "next/link";
import type { ReactNode } from "react";

export default function SiteNavigation({ action, skipTarget = "#page-main" }: { theme?: "light" | "dark"; action?: ReactNode; skipTarget?: string }) {
  return <>
    <a className="site-skip-link" href={skipTarget}>Skip to main content</a>
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="https://www.meiai.in" aria-label="MeiAI home">mei<span>ai</span><i aria-hidden="true">.</i></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <span aria-current="page">Azure Security Journey</span>
          <Link href="https://www.meiai.in/security-recommendations">Security recommendations</Link>
          <Link href="https://www.meiai.in">All MeiAI projects</Link>
        </nav>
        <div className="header-actions">{action}</div>
      </div>
    </header>
  </>;
}
