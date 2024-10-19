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
import { Edit, Delete, Upload, Cancel, Save } from '@mui/icons-material';
import ReactECharts from 'echarts-for-react';
import LineChart from 'theme/components/LineChart';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';
// import { supabase } from '../supabaseClient'; 





interface Company {
  name: string;
  representative: string;
  contact: string;
  email: string;
  bidDocument: string;
}

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


  const [companies, setCompanies] = useState<Company[]>([
    {
      name: 'G & L',
      representative: 'Kicker Nicli',
      contact: '+27 234 5672',
      email: 'Nicli@gmail.com',
      bidDocument: 'Uploaded',
    },
    {
      name: 'Water and Sanitation Agency',
      representative: 'Kilian James',
      contact: '+27 234 5672',
      email: 'Kilian@gmail.com',
      bidDocument: 'No Upload',
    },
  ]);



  const [isAdding, setIsAdding] = useState(false);
  const [newCompany, setNewCompany] = useState<Company>({
    name: '',
    representative: '',
    contact: '',
    email: '',
    bidDocument: '',
  });

  const handleAddCompany = () => {
    setIsAdding(true);
  };



  // Function to add a new company to the Supabase database
// async function addCompanyToDatabase(newCompany: Company) {
//   const { data, error } = await supabase
//     .from('companies') // Replace with your actual table name
//     .insert([
//       {
//         company: newCompany.companyName,
//         representative: newCompany.representative,
//         contact: newCompany.contact,
//         email: newCompany.email,
//       },
//     ]);

//   if (error) {
//     console.error('Error adding company:', error);
//     return { success: false, error };
//   } else {
//     console.log('Company added successfully:', data);
//     return { success: true, data };
//   }
// }

  const handleSaveCompany = async () => {
    setCompanies([...companies, newCompany]);

    // await addCompanyToDatabase(newCompany)
    setNewCompany({
      name: '',
      representative: '',
      contact: '',
      email: '',
      bidDocument: '',
    });


    setIsAdding(false);
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewCompany({
      name: '',
      representative: '',
      contact: '',
      email: '',
      bidDocument: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
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
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>start</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>In Progress</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                </TimelineSeparator>
                <TimelineContent>Success</TimelineContent>
              </TimelineItem>
            </Timeline>
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
        <Button variant="contained" color="secondary" onClick={handleAddCompany}>
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
            {companies.map((company, index) => (
              <TableRow key={index}>
                <TableCell>{company.name}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src="/placeholder.jpg" sx={{ mr: 1 }} />
                    {company.representative}
                  </Box>
                </TableCell>
                <TableCell>{company.contact}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>
                  <IconButton size="small">
                    <Edit />
                  </IconButton>
                  <IconButton size="small">
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell>
                  {company.bidDocument === 'Uploaded' ? (
                    <Typography color="success.main">Uploaded</Typography>
                  ) : (
                    <Button startIcon={<Upload />} color="error">
                      No Upload
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {isAdding && (
              <TableRow>
                <TableCell>
                  <TextField
                    name="name"
                    label="Company Name"
                    value={newCompany.name}
                    onChange={handleInputChange}
                    variant="standard"
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src="/placeholder.jpg" sx={{ mr: 1 }} />
                    <TextField
                      name="representative"
                      label="Representative"
                      value={newCompany.representative}
                      onChange={handleInputChange}
                      variant="standard"
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <TextField
                    name="contact"
                    label="Contact"
                    value={newCompany.contact}
                    onChange={handleInputChange}
                    variant="standard"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="email"
                    label="Email"
                    value={newCompany.email}
                    onChange={handleInputChange}
                    variant="standard"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" onClick={handleSaveCompany}>
                    <Save />
                  </IconButton>
                  <IconButton size="small" onClick={handleCancelAdd}>
                    <Cancel />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <TextField
                    name="bidDocument"
                    label="Bid Document"
                    value={newCompany.bidDocument}
                    onChange={handleInputChange}
                    variant="standard"
                  />
                </TableCell>
              </TableRow>
            )}
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
