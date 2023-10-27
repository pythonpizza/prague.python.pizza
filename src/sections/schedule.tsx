import { Container, Heading, Paragraph } from "theme-ui";

import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container id="schedule" variant="smallContainer">
    <Heading>Schedule</Heading>
    <Paragraph>The schedule is displayed in your timezone</Paragraph>
    <Paragraph>THIS IS NOT THE FINAL SCHEDULE!</Paragraph>

    {SCHEDULE.map((schedule, index) => (
      <ScheduleCard
        variant={schedule.label ? "info" : "talk"}
        key={index}
        schedule={schedule}
        invert={!(index % 2)}
      />
    ))}
  </Container>
);
