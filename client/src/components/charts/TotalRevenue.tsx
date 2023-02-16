import { ArrowCircleUpRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import ReactApexChart from "react-apexcharts";
import { theme } from "themes";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
  return (
    <Box
      id="chart-total-revenue"
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded
            sx={{ fontSize: 25, color: theme.palette.primary }}
          />
          <Stack>
            <Typography fontSize={12} color={theme.palette.primary}>
              0.8%
            </Typography>
            <Typography fontSize={12} color={theme.palette.text.tertiary}>
              Than last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        options={TotalRevenueOptions}
        type="bar"
        height={310}
        series={TotalRevenueSeries}
      />
    </Box>
  );
};

export default TotalRevenue;
