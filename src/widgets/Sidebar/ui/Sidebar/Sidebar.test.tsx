import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('classNames', () => {
  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
