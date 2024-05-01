import useGener from "../hooks/useGener";

const GenerList = () => {
  const { data } = useGener();
  return (
    <ul>
      {data.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenerList;
