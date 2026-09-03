const UserAvatar = ({ name, imageHeight, textSize = "text-lg" }) => {
  const avatarColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  const colorIndex = name.charCodeAt(0) % avatarColors.length;

  return (
    <div
      className={`aspect-square h-${imageHeight} rounded-full flex items-center justify-center ${avatarColors[colorIndex]}`}
    >
      <span className={`${textSize} font-semibold`}>{name?.[0]?.toUpperCase()}</span>
    </div>
  );
};

export default UserAvatar;
