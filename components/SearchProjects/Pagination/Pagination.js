export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center gap-3">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          key={i}
          className="buttonPage"
          onClick={() => {
            onPageClick(i + 1);
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
