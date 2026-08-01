function ErrorMessage({ message, onRetry }) {
  return (
    <div className="card">
      <p style={{ color: 'red' }}>Error: {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default ErrorMessage;