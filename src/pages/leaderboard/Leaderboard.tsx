// import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
} from '@mui/material';
import { Edit, Delete, Upload } from '@mui/icons-material';
import ReactECharts from 'echarts-for-react';
import LineChart from 'theme/components/LineChart';

const Leaderboard = () => {
  const procurementStageOption = {
    xAxis: {
      type: 'category',
      data: ['Bidding', 'Evaluation', 'Contract Signing'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: { show: false },
    series: [
      {
        type: 'line',
        data: [0, 1, 0],
        symbolSize: 10,
        itemStyle: {
          color: (params: { dataIndex: number }) => {
            return params.dataIndex === 1 ? '#4CAF50' : '#9E9E9E';
          },
        },
        lineStyle: { color: '#9E9E9E' },
      },
    ],
  };

  const budgetManagementOption = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Budget',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 50, name: 'Water Treatment' },
          { value: 30, name: 'Water Production' },
          { value: 20, name: 'Sewerage Project' },
        ],
      },
    ],
  };

  const contractRenewalsOption = {
    xAxis: {
      type: 'category',
      data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [100, 150, 120, 280, 250, 190, 180, 100, 220, 300, 280, 260],
        type: 'bar',

        // Adjust the bar width to make the bars thinner
        barWidth: 15, // You can adjust this to make it thinner or thicker

        itemStyle: {
          // Apply rounded corners only to the top (top-left and top-right)
          borderRadius: [20, 20, 0, 0],
        },
      },
    ],
  };

  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6">Government</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Select fullWidth defaultValue="Saiga">
            <MenuItem value="Saiga">Saiga</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField fullWidth placeholder="Type of Project" />
        </Grid>
        <Grid item xs={12} md={2}>
          <Select fullWidth defaultValue={2022}>
            <MenuItem value={2022}>2022</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="secondary" fullWidth>
            Export Audit Report
          </Button>
        </Grid>

        {/* Procurement Stage */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Procurement Stage</Typography>
            <ReactECharts option={procurementStageOption} style={{ height: '100px' }} />
          </Paper>
        </Grid>

        {/* Budget Management */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Budget Management</Typography>
            <ReactECharts option={budgetManagementOption} style={{ height: '300px' }} />
          </Paper>
        </Grid>

        {/* Province per progress */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Province per progress</Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  {[
                    { name: 'Eastern Cape', value: 234 },
                    { name: 'Free State', value: 236 },
                    { name: 'KwaZulu-Natal', value: 34 },
                    { name: 'Mpumalanga', value: 76 },
                    { name: 'Limpopo', value: 652 },
                    { name: 'Northern Cape', value: 12 },
                  ].map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell>
                        {/* Placeholder for the graph. In a real implementation, you'd use a mini chart here */}
                        <LineChart />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Contract Renewals Timeline */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Contract Renewals Timeline</Typography>
            <ReactECharts option={contractRenewalsOption} style={{ height: '300px' }} />
          </Paper>
        </Grid>

        {/* Contractors */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">Contractors</Typography>
              <Button variant="contained" color="secondary">
                Add Companies
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Companies</TableCell>
                    <TableCell>Representatives</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell>Bid Document</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>G & L</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar src="/placeholder.jpg" sx={{ mr: 1 }} />
                        Kicker Nicli
                      </Box>
                    </TableCell>
                    <TableCell>+27 234 5672</TableCell>
                    <TableCell>Nicli@gmail.com</TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <Edit />
                      </IconButton>
                      <IconButton size="small">
                        <Delete />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Typography color="success.main">Uploaded</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Water and Sanitation Agency</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar src="/placeholder.jpg" sx={{ mr: 1 }} />
                        Kilian James
                      </Box>
                    </TableCell>
                    <TableCell>+27 234 5672</TableCell>
                    <TableCell>Kilian@gmail.com</TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <Edit />
                      </IconButton>
                      <IconButton size="small">
                        <Delete />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Button startIcon={<Upload />} color="error">
                        No Upload
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Leaderboard;
