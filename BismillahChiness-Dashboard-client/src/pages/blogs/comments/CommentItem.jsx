const CommentItem = (item) => {
  // not working

  console.log(item);
  const { name, date, photo, comment } = item;
  return (
    <div className="flex justify-center items-center gap-2">
      <img className="w-24 rounded-md" src={photo} alt="" />
      <div>
        <h5 className="text-xl font-semibold">{name}</h5>
        <p className="text-blue-600 text-lg">{date}</p>
        <h5 className="text-xl text-black">{comment}</h5>
      </div>
    </div>
  );
};

export default CommentItem;
