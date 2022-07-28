import { render } from '@testing-library/react';
import { Label } from './Label';
import { LabelType } from 'ui';

test('test jest', () => {
  const { wrapper } = render(
    <Label
      labelText="Label"
      labelType={LabelType.secondary}
      labelSize="small"
    />,
  );
  expect(wrapper).toBeInDocument();
});
