import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export function DashboardTimeLine() {
  return (
    <div className="dark:bg-dark">
      <Timeline>
        <TimelineItem className="h-28 dark:bg-dark">
          <TimelineConnector className="!w-[78px] dark:bg-dark" />
          <TimelineHeader className="dark:bg-dark relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 dark:text-darkText dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <TimelineIcon className="p-3" variant="ghost">
              <BellIcon className="h-5 w-5 dark:text-darkText dark:bg-orange-700 rounded dark:h-6 dark:w-6" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                variant="h6"
                color="blue-gray"
                className="dark:text-darkText"
              >
                $2400 deposited, Design changes initiated
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal dark:text-darkText"
              >
                22 DEC 7:20 PM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28 dark:bg-dark">
          <TimelineConnector className="!w-[78px] dark:bg-dark" />
          <TimelineHeader className="relative rounded-xl border dark:bg-dark border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <ArchiveBoxIcon className="h-5 w-5 dark:text-darkText dark:bg-orange-700 rounded dark:h-6 dark:w-6" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                variant="h6"
                color="blue-gray"
                className="dark:text-darkText"
              >
                New withdrawal request #1832412
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal dark:text-darkText"
              >
                21 DEC 11 PM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28 dark:bg-dark">
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 dark:bg-dark dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <CurrencyDollarIcon className="h-5 w-5 dark:text-darkText dark:bg-orange-700 rounded dark:h-6 dark:w-6" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography
                variant="h6"
                color="blue-gray"
                className="dark:text-darkText"
              >
                Payment completed for loan installment #4395133
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal dark:text-darkText"
              >
                20 DEC 2:20 AM
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
