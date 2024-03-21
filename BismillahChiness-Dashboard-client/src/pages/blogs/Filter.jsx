const Filter = () => {
  return (
    <div>
      <select
        name=""
        id=""
        className="block w-40 h-10 px-5 text-base bg-gray-400 dark:text-gray-600 dark:bg-gray-900 rounded-lg"
      >
        <option value="">Sort by latest</option>
        <option value="">Sort by Popularity</option>
        <option value="">Sort by Oldest</option>
      </select>
    </div>
  );
};

export default Filter;
