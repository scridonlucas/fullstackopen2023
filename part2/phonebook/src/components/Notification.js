const Notification = ({ message }) => {
  if (message === '') {
    return null;
  }
  if (message.includes('succesfully'))
    return <div className="success">{message}</div>;

  return <div className="error">{message}</div>;
};

export default Notification;
