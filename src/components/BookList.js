import { deleteBook } from "../hooks/modifyBook";

export default function BookList({ books }) {
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
