import Button from '@material-ui/core/Button';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Decorator } from './Decorator';

storiesOf('Home', module)
  .addDecorator(Decorator)
  .add('default', () => (
    <div>
      Macaw UI
      <Button color="primary" variant="contained">
        Go to components
      </Button>
    </div>
  ));
