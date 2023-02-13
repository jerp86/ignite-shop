interface TimerToRevalidateProps {
  seconds?: number
  minutes?: number
  hours?: number
  days?: number
}

export const timerToRevalidate = ({
  seconds = 60,
  minutes = 60,
  hours = 24,
  days = 7,
}: TimerToRevalidateProps) => {
  return seconds * minutes * hours * days
}
