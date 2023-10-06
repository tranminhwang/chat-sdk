export function formatTimestamp(timestamp: number) {
  const currentTime = new Date().getTime();
  const timeDiffInSeconds = Math.floor((currentTime - timestamp) / 1000);
  const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
  const timeDiffInHours = Math.floor(timeDiffInSeconds / 3600);
  const timeDiffInDays = Math.floor(timeDiffInSeconds / 86400);
  const timeDiffInWeeks = Math.floor(timeDiffInDays / 7);
  const timeDiffInMonths = Math.floor(timeDiffInDays / 30.44);

  let time, unit;

  if (timeDiffInSeconds < 60) {
    time = timeDiffInSeconds;
    unit = "seconds";
  } else if (timeDiffInMinutes < 60) {
    time = timeDiffInMinutes;
    unit = "minutes";
  } else if (timeDiffInHours < 24) {
    time = timeDiffInHours;
    unit = "hours";
  } else if (timeDiffInDays < 7) {
    time = timeDiffInDays;
    unit = "days";
  } else if (timeDiffInWeeks < 4) {
    time = timeDiffInWeeks;
    unit = "weeks";
  } else if (timeDiffInMonths < 12) {
    time = timeDiffInMonths;
    unit = "months";
  } else {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    time = `${day}/${month}/${year}`;
    unit = "";
  }
  return { time, unit };
}
