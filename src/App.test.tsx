import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('App is rendered', () => {
    render(<App />);
    const heroBtnAll = screen.getByText('All photos');
    const heroBtnFav = screen.getByText('Favorites');
    expect(heroBtnAll).toBeInTheDocument();
    expect(heroBtnFav).toBeInTheDocument();
  });
  test('Cards is rendered', async () => {
    render(<App />);
    const card = await screen.findAllByTestId('photoCard');
    expect(card[0]).toBeInTheDocument();
  });
  test('Favorite icon changes when clicked', async () => {
    render(<App />);
    const iconBtn = await screen.findAllByTestId('addFavorite');
    userEvent.click(iconBtn[0]);
    const style = screen.getAllByTestId('like');
    expect(style[0]).toHaveStyle('color: rgb(211, 47, 47)');
  });
});
