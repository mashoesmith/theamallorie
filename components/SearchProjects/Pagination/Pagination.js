export const Pagination = ({ totalPages, onPageClick, activePage }) => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center gap-3">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          key={i}
          className={`buttonPage ${activePage === i + 1 ? "activePage" : ""}`}
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
