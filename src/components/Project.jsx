export default function Project(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="flex justify-center items-center h-96 object-cover w-96 gap-3 text-2xl font-bold"
    >
      {props.title}
    </div>
  );
}
