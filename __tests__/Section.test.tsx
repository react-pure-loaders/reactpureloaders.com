import React from 'react';
import {render, screen} from '@testing-library/react'

import Section from '@/components/Section';

describe('Section', () => {
	it('should render correctly given a title', () => {
    render(<Section title='What' />)

    expect(screen.getByRole('heading')).toHaveTextContent('What');
	});
	it('should render a title and a description', () => {
    render(<Section title='Greeting' description='Hello' />)

    expect(screen.getByRole('heading')).toHaveTextContent('Greeting');
    expect(screen.getByText("Hello")).toBeInTheDocument();
	});
	it('should render a children', () => {
    render(<Section title='Greeting'><h3>Hello</h3></Section>)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Greeting');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Hello');
	});
});
