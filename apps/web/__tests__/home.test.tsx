import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders hero text', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Locker')).toBeInTheDocument();
  });
});
