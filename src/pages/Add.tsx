import { useState } from "react";

type BookItem = {
  id: string;
  volumeInfo: VolumeInfo;
};

type VolumeInfo = {
  title: string;
  description?: string;
};

const Add = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== "Enter") return;

    fetchBooks();
  };

  const fetchBooks = (): void => {
    if (query.length < 1) return;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.items || []);
      });
  };

  return (
    <div className="add-page">
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => fetchBooks()}>Search</button>
      {items.length > 0 && (
        <ul>
          {items.map((item: BookItem) => (
            <li key={item.id}>{item.volumeInfo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Add;
