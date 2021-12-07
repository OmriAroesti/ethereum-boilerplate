import { Grid, Typography, Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import logo from "assets/logo.png";

const COLOR = 'cyan';

const Home = () => {
  return (
    <Grid container direction="column" justifyContent="space-between" sx={{height: '100%'}}>
      <Grid container sx={{color: COLOR}}>
        <Grid item xs>
          <Box component="img" src={logo} sx={{width: 300, marginBottom: 8}} />
          <Grid item container alignItems="center" justifyContent="space-evenly" sx={{
            padding: '16px 0', background: '#1b619a', marginBottom: 4
          }}>
            <Button variant="contained" color="info" sx={{fontSize: '1rem'}}>new</Button>
            <Typography sx={{color: COLOR}}>Organized Owls FT Is available now...</Typography>
            <Link sx={{color: '#003232'}}>LEARN MORE&gt;</Link>
          </Grid>
          <Typography variant="h1" sx={{fontSize: '5rem', color: COLOR, marginBottom: 4}}>
            Get Organized.<br />
            Get An Owl.
          </Typography>
          <Typography sx={{marginBottom: 2}}>
            Organizational tools to make your cryptocurrency, FT, and defi
            activities much more manageable. Our proprietary tools
            take the guesswork out of keeping track of incoming and
            outgoing transactions in your wallet.
          </Typography>
          <Grid container item gap={4} alignItems="center">
            <Button variant="contained" color="info" sx={{fontSize: '1rem'}}>
              view on opeansea
            </Button>
            <Typography sx={{color: COLOR, fontSize: '1.2rem'}}>Get an inside look...</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>

      <Typography variant="subtitle1" sx={{
        margin: '40px auto',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        Join the hundreds of people who use Organized Owls to manage their transactions.
      </Typography>
    </Grid>
  );
}

export default Home;