import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="card" id="contact">
      <h2>Contact Me</h2>

      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? 'Hide Help' : 'Show Help'}
      </button>

      {showHelp && <p>Type your message below — it updates live as you type.</p>}

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ padding: '8px', width: '100%', maxWidth: '400px' }}
        />
        <p>Characters typed: {message.length}</p>
        <p>You typed: {message}</p>
      </div>
    </div>
  );
}

export default Contact;