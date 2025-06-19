
export default function Spinner() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <span style={styles.text}>Loading...</span>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #ccc',
    borderTopColor: '#007bff', // Bootstrap blue
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '10px',
    color: '#555',
  },
};