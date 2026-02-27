'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: e.target.password.value }),
      });
      if (res.ok) {
        router.push('/manual');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #1a1a2e; color: #fff; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
        }
        .login { text-align: center; padding: 2rem; }
        .logo { font-size: 3rem; margin-bottom: 1rem; }
        .login h1 {
          font-size: 1.8rem; margin-bottom: .5rem;
          background: linear-gradient(135deg, #c9a96e, #f0d998);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .login p { color: #888; margin-bottom: 2rem; font-size: .9rem; }
        .login input[type="password"] {
          padding: .8rem 1.2rem; font-size: 1rem; border: 2px solid #333;
          border-radius: 8px; background: #111; color: #fff;
          width: 260px; text-align: center; outline: none;
        }
        .login input[type="password"]:focus { border-color: #c9a96e; }
        .login button {
          display: block; margin: 1rem auto 0; padding: .7rem 2rem;
          font-size: 1rem; border: none; border-radius: 8px;
          background: linear-gradient(135deg, #c9a96e, #a07c3e);
          color: #fff; cursor: pointer; font-weight: 600;
        }
        .login button:hover { opacity: .9; }
        .login button:disabled { opacity: .5; cursor: not-allowed; }
        .err { color: #e74c3c; margin-top: 1rem; font-size: .85rem; }
      `}</style>
      <div className="login">
        <div className="logo">🍣</div>
        <h1>NOBU Indian Wells</h1>
        <p>BNP Paribas Open 2026 — Server Training Manual</p>
        <form onSubmit={handleSubmit}>
          <input name="password" type="password" placeholder="Enter password" autoFocus />
          <button type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Access Manual'}
          </button>
        </form>
        {error && <p className="err">Incorrect password. Try again.</p>}
      </div>
    </>
  );
}
