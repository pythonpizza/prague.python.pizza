/** @jsxRuntime classic */
/** @jsx jsx */
import { format } from "date-fns";
import { Box, Card, Heading, jsx, Link, Text } from "theme-ui";

import { Event } from "~/data/schedule";

import { Avatar } from "./avatar";
import { ExternalLinkIcon } from "./external-link-icon";

type Props = {
  variant?: "talk" | "info";
  invert?: boolean;
  schedule: Event;
};

const TalkCard: React.FC<{
  invert: Props["invert"];
  schedule: Props["schedule"];
}> = ({ invert, schedule }) => {
  const AuthorElement = schedule.link ? Link : Text;
  return (
    <Card
      sx={{
        minHeight: "12.8rem",
        p: [
          "3.2rem 4rem 2rem",
          invert ? "2rem 17rem 2rem 10rem" : "2rem 10rem 2rem 17rem",
        ],
      }}
    >
      <Avatar
        src={schedule.photo}
        sx={{
          position: "absolute",
          top: [0, "50%"],
          left: invert ? ["50%", "auto"] : ["50%", 0],
          right: invert ? ["50%", 0] : "auto",
          transform: ["translate(-50%,-75%) scale(1)", "translateY(-50%)"],
        }}
      />

      <Heading
        as="h2"
        sx={{
          mt: 0,
          mb: ["1rem", ".5rem"],
          fontSize: "body",
          color: "text",
        }}
      >
        {schedule.title}
      </Heading>

      <AuthorElement
        rel="noopener noreferrer"
        target="_blank"
        href={schedule.link}
        sx={{
          fontSize: ["smallBody", "body"],
        }}
      >
        {schedule.name}
        {schedule.link && <ExternalLinkIcon />}
      </AuthorElement>
    </Card>
  );
};

const InfoCard: React.FC<{ schedule: Props["schedule"] }> = ({ schedule }) => (
  <Card
    sx={{
      p: "2rem 10rem",
      backgroundColor: "primary",
      color: "white",
      backgroundImage: `linear-gradient(
          45deg,
          transparent 25%,
          rgba(0, 0, 0, 0.05) 25%,
          rgba(0, 0, 0, 0.05) 50%,
          transparent 50%,
          transparent 75%,
          rgba(0, 0, 0, 0.05) 75%
        )`,
      backgroundSize: "4.8rem 4.8rem",
      backgroundRepeat: "repeat",
      animation: "bg-move 2s infinite linear",
      "@keyframes bg-move": {
        "0%": {
          backgroundPositionX: 0,
        },
        "100%": {
          backgroundPositionX: "4.8rem",
        },
      },
    }}
  >
    <Text
      sx={{
        fontSize: "body",
      }}
    >
      {schedule.label}
    </Text>
  </Card>
);

export const ScheduleCard: React.FC<Props> = ({
  variant = "talk",
  invert = false,
  schedule,
}) => (
  <Box
    sx={{
      position: "relative",
      mt: variant === "talk" ? ["9rem", "primary"] : "primary",
    }}
  >
    {variant === "talk" && <TalkCard schedule={schedule} invert={invert} />}
    {variant === "info" && <InfoCard schedule={schedule} />}

    {schedule.when && (
      <Text
        key="when"
        sx={{
          position: "absolute",
          top: ["-3rem", "50%"],
          left: invert ? ["5rem", "2rem"] : ["5rem", "calc(100% - 2rem)"],
          transform: [
            null,
            invert
              ? "translateY(-50%) translateX(0)"
              : "translateY(-50%) translateX(-100%)",
          ],
          color: variant === "info" ? ["text", "white"] : "text",
        }}
      >
        {format(new Date(schedule.when), "HH:mm")}
      </Text>
    )}
  </Box>
);
