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
            <Typography>How can I download the audit report?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{/* Add content here */}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>I am a supplier, how do I get hired?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{/* Add content here */}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the current Water and Sanitation Project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The current project is ... Our team of investing experts make decisions about our portfolio strategies and
              fund selection with the help of an external committee of economists, PhDs, and industry experts.
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
