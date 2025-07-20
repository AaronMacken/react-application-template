import { render, screen } from '@testing-library/react';

import Title from './Title';

// Key Tools for testing library react
// 1. render - renders the component into a virtual DOM
// 2. screen - global querying util for accessing rendered output
// 3. queries - methods to find elements in the rendered output (getBy, queryBy, findBy)
// 4. userEvent - simulates user interactions with the component

// How do I know which role to use?
// screen.logTestingPlaygroundURL() or testing-playground.com
// This will generate a URL that you can open in your browser to see the rendered component and
// interact with it. It will also provide you with suggestions on how to query elements based on
// their roles, labels, and text content.

describe('component: Title', () => {
  it('should render correctly', () => {
    render(<Title value="Test Title" />);

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeTruthy();
  });
});
