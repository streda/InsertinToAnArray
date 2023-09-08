import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// let nextId = 3;
const initialArtists = [
  // { id: 0, name: "Marta Colvin Andrade" },
  // { id: 1, name: "Lamidi Olonade Fakeye" },
  // { id: 2, name: "Louise Nevelson" },
  // { id: 3, name: "Kim Patel" },
  // { id: 4, name: "Wallace Iso" }
  { id: uuidv4(), name: "Marta Colvin Andrade" },
  { id: uuidv4(), name: "Lamidi Olonade Fakeye" },
  { id: uuidv4(), name: "Louise Nevelson" }
];

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const trimmedEntry = name.trim();
    if (trimmedEntry !== "") {
      const insertAt = 0; // Could be any index
      const nextArtists = [
        // Items before the insertion point:
        ...artists.slice(0, insertAt),
        // New item:
        { id: uuidv4(), name: name },
        // Items after the insertion point:
        ...artists.slice(insertAt)
      ];
      setArtists(nextArtists);
      setName("");
    }
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
