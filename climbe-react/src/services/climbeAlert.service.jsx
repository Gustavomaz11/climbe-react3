import { toast } from "react-hot-toast"
import ClimbeAlert from "../components/alert/ClimbeAlert"

export const showClimbeAlert = ({
  title,
  message,
  avatar,
  actionLabel,
  duration = 5000,
}) => {
  return toast.custom(
    (t) => (
      <ClimbeAlert
        t={t}
        title={title}
        message={message}
        avatar={avatar}
        actionLabel={actionLabel}
      />
    ),
    { duration }
  )
}
