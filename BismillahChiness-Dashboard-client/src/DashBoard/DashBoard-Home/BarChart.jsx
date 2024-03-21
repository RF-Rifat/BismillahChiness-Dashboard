import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Total Transactions",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#359BF0"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function BarChart() {
  return (
    <Card className="dark:bg-dark dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-10">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-[#359BF0] p-5 text-darkText">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="dark:text-darkText"
          >
            Monthly Transaction Trends
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal dark:text-white"
          >
            Monthly Transaction trends for your banking accounts
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0 dark:text-darkText">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
