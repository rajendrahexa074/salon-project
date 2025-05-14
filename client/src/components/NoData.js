const NoData = ({ message = "No records found", image = "/no-data.png" }) => (
  <div className="text-center text-muted my-4">
    <img src={image} alt="No data" style={{ width: '150px', opacity: 0.5 }} />
    <p className="mt-3">{message}</p>
  </div>
);

export default NoData;