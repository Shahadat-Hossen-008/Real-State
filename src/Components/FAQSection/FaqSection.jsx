import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

function FaqSection () {
  return (
    <div className='w-10/12 mx-auto my-20 px-10'>
    <h2 className="text-5xl text-center font-gil-bold">
    Frequently asked<span className="text-primary"> questions </span>
      </h2>
      <Accordion sx={{marginTop:"40px", marginBottom:"20px", padding:"10px"}}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Typography component="span" className='!text-2xl !font-gil-medium'>There are chatbots, support lines, and customer reviews?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        We are giving the best law services to the mass people for their legal advice and nees. We are a bunch of lawyers and we are very determind and loyel.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px", marginBottom:"20px", padding:"10px"}}>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"

        >
          <Typography className='!text-2xl !font-gil-medium' component="span">Before creating one for your what kind of content?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px", marginBottom:"20px", padding:"10px"}} defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel3-content"
          id="panel3-header"
          
        >
          <Typography className='!text-2xl !font-gil-medium' component="span">What kind of content requirements are inclined to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px", marginBottom:"20px", padding:"10px"}} defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='!text-2xl !font-gil-medium' component="span">Why should you make an FAQ page?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginTop:"20px", marginBottom:"20px", padding:"10px"}} defaultExpanded>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='!text-2xl !font-gil-medium' component="span">Optimizes your site for voice search?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default FaqSection