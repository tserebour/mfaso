import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const UserFeedback = () => {
  const [timeframe, setTimeframe] = useState('All-time');
  const [people, setPeople] = useState('All');
  const [topic, setTopic] = useState('All');

  const projects = [
    {
      description:
        'Building public sanitation facilities, including latrines and sewage systems, in urban and peri-urban areas. This project focuses on reducing open defecation and improving public health.',
      avatar: '/api/placeholder/50/50',
    },
    {
      description:
        'Building public sanitation facilities, including latrines and sewage systems, in urban and peri-urban areas. This project focuses on reducing open defecation and improving public health.',
      avatar: '/api/placeholder/50/50',
    },
    {
      description:
        'Building public sanitation facilities, including latrines and sewage systems, in urban and peri-urban areas. This project focuses on reducing open defecation improving public health.',
      avatar: '/api/placeholder/50/50',
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
            <MenuItem value="All-time">Timeframe: All-time</MenuItem>
          </Select>
          <Select value={people} onChange={(e) => setPeople(e.target.value)}>
            <MenuItem value="All">People: All</MenuItem>
          </Select>
          <Select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <MenuItem value="All">Topic: All</MenuItem>
          </Select>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={4}>
          {projects.map((project, index) => (
            <Card key={index} sx={{ width: '30%', bgcolor: 'white' }}>
              <CardContent>
                <Typography variant="body2" mb={2}>
                  {project.description}
                </Typography>
                <Avatar src={project.avatar} />
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" mb={4}>
          <Box mx={1} bgcolor="grey.300" width={10} height={10} borderRadius="50%" />
          <Box mx={1} bgcolor="grey.800" width={10} height={10} borderRadius="50%" />
          <Box mx={1} bgcolor="grey.300" width={10} height={10} borderRadius="50%" />
        </Box>

        <Typography variant="h5" mb={2}>
          FAQs
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I track infrastructure installation progress?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>To track infrastructure installation progress in the MFASO Smart Water & Sanitation system, you can use the platform’s automated reporting tools. These tools provide real-time updates on project timelines, installation status, and any potential delays. You can also view progress reports that visualize the work through charts and graphs, giving you a clear overview of each phase of the infrastructure installation process.

Additionally, the system uses IoT sensors and GPS tracking to monitor the movement and installation of materials, allowing you to track the delivery and setup of products in real time. This ensures transparency and allows you to stay informed on the infrastructure developments in your area.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I report a problem with water supply in my area?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Log in to the web application.
Look for the option labeled "Report an Issue" or "Report Water Supply Problem" in the interface.
Fill in the required fields, such as your location, the type of issue (e.g., low water pressure, water quality concerns, or service interruptions), and any additional comments or photos if applicable.
Once the details are entered, submit the report. The system will log your issue and notify the relevant authorities or service providers in your area.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How to I export the audit report?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            On the dashboard, locate and select the leaderboard tab
At the top right corner, there is an option "Export Audit Report" in the page
Click on that option and your report will be downloaded
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Paper elevation={3} sx={{ mt: 4, p: 2, display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <KeyboardVoiceIcon />
          </IconButton>
          <TextField fullWidth variant="standard" placeholder="Type your Message" sx={{ mx: 2 }} />
          <Avatar src="/api/placeholder/40/40" />
        </Paper>
      </Box>
    </Container>
  );
};

export default UserFeedback;
