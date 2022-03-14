import { useCreateDelete } from "../hooks/useCreateDelete";

export default function BookList({ books }) {
  const { deleteBook } = useCreateDelete();
  const handleClick = async (id) => {
    await deleteBook(id);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
