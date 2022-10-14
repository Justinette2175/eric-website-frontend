import dayjs from "dayjs";

export enum DateFormat {
  dayMonthYear = "D MMM YYYY",
  year = "YYYY"
}

type DateProps = {
  date: string;
  format?: DateFormat;
};

export function Date({ date, format = DateFormat.dayMonthYear }: DateProps) {
  return (
    <span className="block whitespace-nowrap text-sm text-slate-500">
      {dayjs(date).locale("fr").format(format)}
    </span>
  );
}
