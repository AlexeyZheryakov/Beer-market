/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '@material-ui/core';
import useStyles from 'pages/details/styles';
import { IBeerDTO } from 'Api/beer';

export default function CenteredTabs(props: IBeerDTO) {
  const {
    description,
    brewers_tips,
    food_pairing,
    tagline,
    attenuation_level,
    contributed_by,
    first_brewed,
    ph,
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.divTabs}>
      <Paper>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Description" />
          <Tab label="Tagline" />
          <Tab label="Brewers tips" />
          <Tab label="food_pairing" />
          <Tab label="Other" />
        </Tabs>
      </Paper>
      {!value && <Typography className={classes.typography}>{description}</Typography>}
      {value === 1 && <Typography className={classes.typography}>{tagline}</Typography>}
      {value === 2 && <Typography className={classes.typography}>{brewers_tips}</Typography>}
      {value === 3 && (
        <Typography className={classes.typography}>
          {food_pairing.map((item: string, index: number) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </Typography>
      )}
      {value === 4 && (
        <Typography className={classes.typography}>
          Attenuation level: {attenuation_level} <br />
          Contributed by: {contributed_by} <br />
          First brewed: {first_brewed} <br />
          PH: {ph}
        </Typography>
      )}
    </div>
  );
}
