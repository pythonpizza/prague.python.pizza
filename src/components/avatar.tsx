/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";

import { Image } from "~/components/image";

type Props = {
  src: string;
};

export const Avatar: React.FC<Props> = ({ src, ...props }) => (
  <Box
    sx={{
      width: ["8rem", "14.4rem"],
      height: ["8rem", "14.4rem"],
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "2px 8px 32px -8px #ed4337",
      userSelect: "none",
    }}
    {...props}
  >
    <Image
      sx={{
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "primary",
      }}
      objectFit="cover"
      layout="fill"
      alt="Speaker photo"
      src={src}
    />
  </Box>
);
