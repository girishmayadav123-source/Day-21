import './ClientPortal.css'

function ClientPortal() {
  return <div className="portal-page">
    <section className="portal-welcome">
      <p className="eyebrow">YOUR AMC, SIMPLIFIED</p><h1>Welcome to your<br /><em>service desk.</em></h1>
      <p className="intro">Stay informed, request support, and keep every covered asset running at its best.</p>
      <div className="trust-row"><span>✓ Contract details at a glance</span><span>✓ Real-time service updates</span></div>
      <div className="support-card"><div className="headset">✦</div><div><strong>Need urgent assistance?</strong><p>Our support specialists are here around the clock.</p></div><a href="/contact">Call now →</a></div>
    </section>
    <section className="login-panel">
      <div className="login-box"><p className="eyebrow">SECURE ACCESS</p><h2>Sign in to your portal</h2><p className="login-subtext">Use your registered email to view your AMC details.</p>
        <form onSubmit={(event) => event.preventDefault()}><label>Email address<input type="email" placeholder="you@company.com" required /></label><label>Contract or client ID<input type="text" placeholder="e.g. AMC-2026-1048" required /></label><div className="form-options"><label className="check"><input type="checkbox" /> Remember me</label><a href="/contact">Need help?</a></div><button type="submit">Access my portal <span>→</span></button></form>
        <p className="new-client">First time here? <a href="/contact">Request portal access</a></p>
      </div><p className="safe-note">⌁ Your information is protected with industry-standard encryption.</p>
    </section>
  </div>
}

export default ClientPortal