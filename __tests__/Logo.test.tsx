import React from 'react';
import {render, screen} from '@testing-library/react'

import Logo from '@/components/Logo';

describe('Logo', () => {
	it('should render correctly', () => {
    render(<Logo />)
    expect(screen.getByAltText('Logo')).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=96&q=75');
    expect(screen.getByAltText('Logo')).toHaveAttribute('height', '35');
    expect(screen.getByAltText('Logo')).toHaveAttribute('width', '35');
	});
});
