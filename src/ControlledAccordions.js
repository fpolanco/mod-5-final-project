import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>What's on my ballot?</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Voting information differs by state. For more information based on your home state fill out your address information at <a href={"https://www.vote411.org/"}>Vote411.org </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>How can I check my registration status?</Typography>
          <Typography className={classes.secondaryHeading}>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Are you registered to vote? Check your registration status <a href={"https://www.vote.org/am-i-registered-to-vote/"}>here !</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Where do candidates stand on key issues?</Typography>
          <Typography className={classes.secondaryHeading}>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Check out <a href={"https://ballotpedia.org/Presidential_election,_2020#Presidential_candidates_on_the_issues"}>this</a> in depth resources on where candidates stand on many issues
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Want to know more about candidates?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fourth Answer
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

