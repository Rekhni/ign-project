import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import bgImg from '../assets/bgLabImg.webp';
import timelineData from "../timelineData.json";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function HistoryTimeline() {
  return (
    <Box       sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // adjust darkness here
          zIndex: 1,
        }}
      />
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          padding: 4,    
          maxHeight: 500,
          overflowY: 'auto', }}>
        <Timeline position="alternate">
          {timelineData.map((ev, idx) => (
            <TimelineItem key={idx}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align={idx % 2 === 0 ? 'right' : undefined} variant="body2" color="text.secondary" />
              <TimelineSeparator>
                {idx > 0 && <TimelineConnector sx={{ backgroundColor: '#fff' }} />}
                <TimelineDot sx={{ backgroundColor: '#fff', color: '#1976d2' }}>
                  <AccessTimeIcon/>
                </TimelineDot>
                {idx < timelineData.length - 1 && <TimelineConnector sx={{ backgroundColor: '#fff' }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" sx={{ fontFamily: 'Montserrat', color: '#fff' }}>{ev.year}</Typography>
                <Typography sx={{ fontFamily: 'Montserrat', color: '#fff' }}>{ev.text}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}
