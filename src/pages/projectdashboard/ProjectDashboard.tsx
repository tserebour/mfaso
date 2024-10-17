// import React from 'react';
import { Grid, Paper, Typography, Box, LinearProgress, Stack, Container } from '@mui/material';

import BudgetUtilization from 'components/sections/projectdashboard/BudgetUtilization';
import SalesMapping from 'components/sections/dashboard/sales-mapping/SalesMapping';

// You'll need to import a GeoJSON file for South Africa's provinces
// import southAfricaMap from './southAfricaMap.json';

const ProjectDashboard = () => {
  // echarts.registerMap('southAfrica', southAfricaMap);

  // const mapOption = {
  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{b}: {c}',
  //   },
  //   visualMap: {
  //     min: 0,
  //     max: 500000,
  //     text: ['High', 'Low'],
  //     realtime: false,
  //     calculable: true,
  //     inRange: {
  //       color: ['#C6D8E8', '#2E5C8A'],
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'map',
  //       map: 'southAfrica',
  //       label: {
  //         show: true,
  //       },
  //       data: [
  //         { name: 'Northern Cape', value: 372989 },
  //         { name: 'Western Cape', value: 129462 },
  //         { name: 'Eastern Cape', value: 168966 },
  //         { name: 'Free State', value: 129825 },
  //         { name: 'North West', value: 104882 },
  //         { name: 'Gauteng', value: 18178 },
  //         { name: 'Mpumalanga', value: 76495 },
  //         { name: 'Limpopo', value: 125754 },
  //         { name: 'KwaZulu-Natal', value: 94361 },
  //       ],
  //     },
  //   ],
  // };

  // const budgetOption = {
  //   tooltip: {
  //     trigger: 'axis',
  //   },
  //   xAxis: {
  //     type: 'category',
  //     data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   },
  //   yAxis: {
  //     type: 'value',
  //   },
  //   series: [
  //     {
  //       name: 'Budget Allocation',
  //       type: 'line',
  //       data: [80000, 90000, 85000, 83000, 83000, 85000, 87000, 88000, 86000, 85000, 87000, 93004],
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //           {
  //             offset: 0,
  //             color: 'rgba(58,77,233,0.8)',
  //           },
  //           {
  //             offset: 1,
  //             color: 'rgba(58,77,233,0.1)',
  //           },
  //         ]),
  //       },
  //     },
  //     {
  //       name: 'Actual Expenditure',
  //       type: 'line',
  //       data: [85000, 82000, 87000, 86000, 82000, 88000, 86000, 89000, 88000, 84000, 85000, 94504],
  //       areaStyle: {
  //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //           {
  //             offset: 0,
  //             color: 'rgba(0,221,255,0.8)',
  //           },
  //           {
  //             offset: 1,
  //             color: 'rgba(0,221,255,0.1)',
  //           },
  //         ]),
  //       },
  //     },
  //   ],
  // };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10}>
        {/* topside */}

        <Grid container item xs={12} spacing={5}>
          <Grid item xs={6}>
            <SalesMapping />
          </Grid>

          <Grid item xs={6}>
            <Stack spacing={2}>
              <Grid container spacing={2}>
                {[
                  { label: 'Revenue', value: 'R 250 K' },
                  { label: 'Estimated Budget', value: 'R 3,500' },
                  { label: 'Predicted Budget', value: 'R 5,387' },
                  { label: 'Region', value: 'Upper Karoo' },
                  { label: 'Coverage Area', value: '1500km' },
                  { label: 'Start and End Date', value: 'Oct 2022 - Mar 2028' },
                ].map((item) => (
                  <Grid item xs={4}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '16px' }}>
                      <Typography variant="h3" gutterBottom>
                        {item.label}
                      </Typography>

                      <Typography variant="h6" gutterBottom>
                        {item.value}
                      </Typography>
                      {/* <LinearProgress variant="determinate" value={80} /> */}
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <BudgetUtilization />
            </Stack>
          </Grid>
        </Grid>

        {/* downside */}

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '50px' }}>
              <Typography variant="h6" gutterBottom>
                Strongest Topics
              </Typography>
              {[
                { name: 'Wastewater Treatment Plants', progress: 95 },
                { name: 'Community Water Supply Systems', progress: 92 },
                { name: 'Integrated Water Resource Management (IWRM)', progress: 89 },
              ].map((topic, index) => (
                <Box key={index} mb={2}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Box
                      component="img"
                      width={20}
                      src={`https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png`}
                      mr={2}
                    />
                    <Typography variant="body1">{topic.name}</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    style={{
                      borderRadius: '10px',
                      height: '20px', // Adjust the value for more or less curvature
                    }}
                    value={topic.progress}
                    color="success"
                  />
                  <Typography variant="body2" align="right">{`${topic.progress}% Done`}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '50px' }}>
              <Typography variant="h6" gutterBottom>
                Weakest Topics
              </Typography>
              {[
                { name: 'Desalination Plants', progress: 24 },
                { name: 'Rainwater Harvesting Systems', progress: 42 },
                { name: 'Sanitation Infrastructure', progress: 36 },
              ].map((topic, index) => (
                <Box key={index} mb={2}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Box
                      component="img"
                      width={20}
                      src={`https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png`}
                      mr={2}
                    />
                    <Typography variant="body1">{topic.name}</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={topic.progress}
                    color="warning"
                    style={{
                      borderRadius: '10px',
                      height: '20px', // Adjust the value for more or less curvature
                    }}
                  />

                  <Typography variant="body2" align="right">{`${topic.progress}% Done`}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectDashboard;
