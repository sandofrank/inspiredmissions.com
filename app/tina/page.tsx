export default function AdminPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tina CMS Setup Instructions</h1>
      <p>To use Tina CMS with your blog, you need to set up Tina Cloud or configure local mode.</p>

      <h2>Option 1: Tina Cloud (Recommended)</h2>
      <ol>
        <li>Go to <a href="https://app.tina.io" target="_blank" rel="noopener">app.tina.io</a> and create a free account</li>
        <li>Create a new project and connect your Git repository</li>
        <li>Copy your Client ID and Token</li>
        <li>Add them to your <code>.env.local</code> file:
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
{`NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here`}
          </pre>
        </li>
        <li>Restart your dev server: <code>npm run dev</code></li>
        <li>Access the admin at <code>/admin/index.html</code></li>
      </ol>

      <h2>Option 2: Local Development Mode</h2>
      <p>For local editing without Tina Cloud:</p>
      <ol>
        <li>Install the Tina CLI: <code>npm install @tinacms/cli</code></li>
        <li>Run: <code>npx tinacms dev -c "npm run dev"</code></li>
        <li>Access the admin at the URL provided by the CLI</li>
      </ol>

      <h2>Current Status</h2>
      <p>Tina configuration is ready at <code>tina/config.ts</code></p>
      <p>Your Icon components are configured and ready to use in the visual editor!</p>
    </div>
  );
}
