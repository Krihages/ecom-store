type ButtonProps = {
  text: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
};

export default function Button({
  text,
  onClick,
  color = "primary",
}: ButtonProps) {
  return (
    <button
      className="bg-blue-700 py-2 px-4 rounded-lg text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
