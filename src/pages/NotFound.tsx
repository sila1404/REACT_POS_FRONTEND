type Props = {};

export default function notFound({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
  );
}