import { useList } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import {
  PieChart,
  PropertyCard,
  PropertyReferrals,
  TotalRevenue,
} from "components";
import { theme } from "themes";

const HomePage = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={648}
          series={[75, 25]}
          colors={[
            theme.palette.dashboard.primary,
            theme.palette.dashboard.secondary,
          ]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={[
            theme.palette.dashboard.orange,
            theme.palette.dashboard.secondary,
          ]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={[
            theme.palette.dashboard.green,
            theme.palette.dashboard.secondary,
          ]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={[
            theme.palette.dashboard.pink,
            theme.palette.dashboard.secondary,
          ]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{
          xs: "column",
          lg: "row",
        }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
