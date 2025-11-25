// src/App.tsx

import { Box, Card, CardHeader, CardContent, Container, Grid, Link, List, ListItem, ListItemText, Typography } from '@mui/material';

let title = 'Welcome to my Portfolio';
// 1. Define the shape of a single item
interface ItemData {
  item: string;
}
// 2. Define the shape of the 'about' object
// Record<string, ItemData[]> means: Keys are strings, values are arrays of ItemData
type AboutSection = Record<string, ItemData[]>;
const siteData = {
    about: {
      things: [
        { item: 'Tabletop RPGs' },
        { item: 'MMORPGs' },
        { item: 'Reading various books' },
        { item: 'Reading random wikipedia entries' },
        { item: 'Listening to music (all sorts)' },
        { item: 'Playing Guitar' },
        { item: 'Video Games' },
        { item: 'Movies with my wife!' },
        { item: 'Card games with friends' }
      ],
      games: [
        { item: 'Animal Crossing: New Horizon' },
        { item: 'Minecraft' },
        { item: 'Dauntless' },
        { item: 'Ticket to Ride (boardgame)' },
        { item: 'Munchkin' },
        { item: 'Settlers of Catan (boardgame)' },
        { item: '101 Ways to Die (PS4)' }
      ],
      tv: [
        { item: 'Doctor Who' },
        { item: 'Archer' },
        { item: 'Rick & Morty' },
        { item: 'The IT Crowd' },
        { item: 'Arrested Development' },
        { item: 'Good Eats' },
        { item: 'Modern Marvels' },
        { item: 'How its Made' },
        { item: 'Lost' },
        { item: 'Iron Chef (both Original and American)' },
        { item: 'House, MD' },
        { item: 'Scrubs' }
      ],
      heroes: [
        { item: 'Deadpool' },
        { item: 'Wolverine' },
        { item: 'Nightcrawler' },
        { item: 'Batman' },
        { item: 'Gambit' }
      ],
      writings: [
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYa1loamZHc29XQ1E/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYd2JKb2VBWkNYLWc/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYa1RmM2VwZ0V5UDQ/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYcG51MXUwdFFUM3M/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYSjZTaHc1aHdnaVU/edit?usp=sharing"
        },
        {
          item:
           "https://drive.google.com/file/d/0B2lCjTRAVBHYRmdlYXdaQ0pIUDA/edit?usp=sharing"
        },
        {
          item:
           "https://drive.google.com/file/d/0B2lCjTRAVBHYcENmT3lueTNLdVk/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYeGRuV3FnZ01mN2c/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYUFVobUNBRTVJaEE/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing"
        },
        {
          item:
            "https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing"
        }
      ]
    },
    home: {
      blog: [
        {
          id: 0,
          title: 'Reactjs Tinkering',
          date: '9/04/2020',
          message:
            '<p>Tinkered around with some react and styled-components today, learned how to use the themeprovider to enable dynamic switching of themes. Super nice. <a class="has-text-link" href="https://github.com/jameshood118/react-theme-toggle" target="_blank">Github</a> or <a class="has-text-link" href="https://codesandbox.io/s/eloquent-smoke-iqucb" target="_blank">Codesandbox</a>. I also followed the react tictactoe tutorial a few weeks ago, nothing super special but i learned a lot, <a class="has-text-link" href="https://github.com/jameshood118/react_tictactoe" target="_blank">Github</a></p>'
        },
        {
          id: 1,
          title: 'Updates',
          date: '8/16/2020',
          message:
            '<p>Just finished re-adding vuex to this site, wanted to use it as a data store, a single place i could write data to without having to set up a database, or store all of the items in their specific pages. This way i could also use that data should i want to write badge like components, etc. Vuex is very powerful. I have also set up a number of projects on my github (some react, some gatsby etc) as well as setting up my profile readme. Clever boy.</p><p> This isnt some massive project, this is a SPA vueJS portfolio to show the world i can code in vueJS. This site was set up using @vue/cli, definitely a much faster set up than before.</p>'
        },
        {
          id: 2,
          title: 'Updates',
          date: '7/12/2020',
          message:
            'I set up a new repo on github so i can tinker with gatsbyjs. Gotta say, im very impressed, it seems to solve some of the problems i see with VueJS. I am impressed with its builtin graphql capabilities, and i cant wait to see how it would fair hooked up to some real data!'
        },
        {
          id: 3,
          title: 'Updates',
          date: '7/04/2020',
          message:
            'Might use this to show off some components ive written, might delete! hah! This project uses vue 2.6.11 (@vue/cli), vue router 3.2.0, and my current favorite css framework Bulma 0.9.0. Linting with eslint, with vs code as my editor.'
        }
      ]
    }
  };

const aboutData: AboutSection = siteData.about as AboutSection;

const AboutList = ()=> {

  return (
      <Box component="section"  sx={{padding: "2rem 1.5rem"}}>
        <Grid container spacing={3}>
          {Object.entries(aboutData).map(([bio, items]) => (
            <Grid key={bio} size={4}>
              <Card>
                <CardHeader
                  title={
                    <Box component="span">
                      <Typography sx={{ textTransform: 'capitalize', fontSize: '1rem', fontWeight: 'bold' }}>
                        {bio}
                      </Typography>
                    </Box>
                  }
                  sx={{ backgroundColor: 'grey.50' }}
                />
                <CardContent>
                <List aria-label={bio}>
                  {items.map((entry, index) => (
                    <ListItem key={index} disableGutters sx={{p:0.5}}>
                      {/* Check if the string contains HTML (like the <a> tags in 'writings').
                        If yes, use dangerouslySetInnerHTML. If no, render normally.
                      */}
                      {entry.item.includes('http') ? (
                        <Link href={entry.item}>writings</Link>
                      ) : (
                        <ListItemText>{entry.item}</ListItemText>
                      )}
                    </ListItem>
                  ))}
                </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}

const BlogItems = ()=> {
  return (      
  <Box component="section" sx={{padding: "2rem 1.5rem"}}>
        <Grid container spacing={3}>
          {siteData.home.blog.map((item) => (
            <Grid key={item.id} size={12}>
              <Card>
                <CardHeader
                  title={
                    <Box component="span">
                      {item.title} - 
                      <Typography component="span" variant="caption" sx={{ ml: 1 }}>
                        <time dateTime={item.date}>{item.date}</time>
                      </Typography>
                    </Box>
                  }
                  sx={{ backgroundColor: 'grey.50' }}
                />
                <CardContent>
                  {/* Using dangerouslySetInnerHTML to mimic v-html behavior */}
                  <Typography 
                    component="div" 
                    dangerouslySetInnerHTML={{ __html: item.message }} 
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  </Box>);
}

const App = () => {

  return (
        <Box
          sx={{
            // Padding Control
            pt: 0, // No padding on the top
            pb: 0, // No padding on the bottom
            pl: { xs: 1, sm: 1, md: 2, lg: 2 }, // **Left Padding:** Adjusts responsively
            pr: { xs: 1, sm: 1, md: 2, lg: 2 }, // **Right Padding:** Matches the left padding
            
            // Color Control (Ensuring Accessibility)
            bgcolor: 'secondary.main', // Light Cyan background for the content box
            color: 'secondary.contrastText', // Black text for maximum contrast

            // Optional: Basic styling for visibility
            minHeight: '300px',
            py: 4, // Add some vertical padding INSIDE the Box to space out the content
            textAlign: 'center',
            boxShadow: 3, // Add a slight shadow
          }}
        >
          {/* Content inside the central div */}
          <Box
                component="section"
                sx={{
                  // Replicates 'hero' class flex behavior
                  display: { xs: 'none', md: 'flex' }, // Hidden on touch devices (xs, sm), visible on desktop (md+)
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxWidth: '100%',
                  minHeight: 'auto', // Adjust height as needed to match Bulma's hero size
                  py: 6, // Padding Y-axis (replicates hero-body spacing)
                }}
              >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
              {/* Replicates 'hero-body' content */}
              <Box 
                component="div" 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center' 
                }}
              >
                <img 
                  src="./assets/gallerybanner.png" 
                  alt="Gallery Banner" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    display: 'block' 
                  }} 
                />
              </Box>
            </Container>
          </Box>
            <Box component="section" sx={{ mb: 4 }}>
            <Box component="section" sx={{padding: "2rem 1.5rem"}}>
              <Card>
                <CardHeader 
                  title={title} 
                  sx={{ backgroundColor: 'grey.100' }} // Optional header styling
                />
                <CardContent>
                  <Typography variant="body1">
                    This site will serve as a thing. to show off some stuff here and
                    there. Why am I doing this? because lets be honest, i started
                    setting this site up at 4:15 pm , saturday july 4th 2020. by 4:58
                    pm after watching the Back to the Future Trilogy i had a skeleton
                    up and running. very minimal yes, but i am a front end developer.
                    I work best with a UX/UI developer. I make their awesome designs
                    work, they make me look good, i make them look good.
                  </Typography>
                  <Typography variant="body1">
                    I am an outside the box kind of thinker. I am not set in my ways,
                    nor have I had 'the rules of the internet' engraved in my head. If
                    something doesn't work, I find another solution, learn it, and
                    apply it. My methods have always been 'work on it until it works
                    without issues'. I love getting down deep into code and figuring
                    out the logic.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box component="section" sx={{padding: "2rem 1.5rem"}} />
              <Card>
                  <CardHeader 
                    title="About" 
                    titleTypographyProps={{ variant: 'h6' }}
                    sx={{ backgroundColor: 'grey.100' }} // Optional: Mimics the light grey header of Bulma cards
                  />
                  <CardContent>
                    <Typography variant="body1">
                      My name is James Hood, I am a Front end Web Developer. I work with
                      a wide array of tools. My languages include: VueJS, Javascript
                      (ECMAScript 5/6), Jquery, HTML(5), CSS(3). I have worked as a
                      graphic designer and as a web developer, and in my own personal
                      freelance work I have often been both at the same time. In 2015 I
                      acquired new skills in my briefcase, these include: Shipping and
                      Logistics, Ecommerce data entry, Amazon Vendor Central compliance,
                      EDI data exchange as well as Quickbooks online. I have become more
                      than just a Web Developer, and much more than just a face in the
                      crowd.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      These days its refreshing to find someone who can do multiple
                      things, who can learn multiple skills, and run with that. The days
                      of 1 skill per 1 employee are over. That just doesnt work these
                      days.
                    </Typography>
                  </CardContent>
              </Card>
            </Box>

    {/* Blog/Items Grid Section */}
      <BlogItems/>

        {/* About Me Section */}

      <AboutList />
        </Box>
  );
};

export default App;