export function stringToHslColor(str: string, s = 50, l = 50) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

export const stringToAvatarName = (name: string) => {
  const strSplit = name.split(" ");
  return strSplit
    .map((str) => str[0].toUpperCase())
    .join("")
    .slice(0, 2);
};
