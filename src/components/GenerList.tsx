import useGener from "../hooks/useGener";

const GenerList = () => {
  const { genres } = useGener();
  return (
    <ul>
      {genres.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
