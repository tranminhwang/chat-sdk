import Image from "next/image";
import { stringToAvatarName, stringToHslColor } from "@/utils/string";

interface AvatarProps {
  name: string;
  size: 56 | 40;
  src?: string;
  priority?: boolean;
}

export default function Avatar({ name, size, src, priority }: AvatarProps) {
  return (
    <div
      className="border border-gray-200 rounded-full overflow-hidden"
      style={{
        ...(!src && {
          background: stringToHslColor(stringToAvatarName(name), 80, 40),
        }),
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      {src && (
        <Image
          className="object-cover"
          src={src}
          alt={name}
          width={size}
          height={size}
          priority={Boolean(priority)}
        />
      )}
      {!src && (
        <h6
          className="text-sm font-semibold text-center leading-10"
          style={{
            color: stringToHslColor(stringToAvatarName(name), 100, 50),
          }}
        >
          {stringToAvatarName(name)}
        </h6>
      )}
    </div>
  );
}
