import React from 'react';
import {Chance} from 'chance';
import {render, screen} from '@testing-library/react';

import SocialMedia from '@/components/SocialMedia';

const chance = new Chance();
describe('Social Media', () => {
  it('should render correctly', () => {
    const expectedSrc = chance.url();
    const expectedDesc = chance.sentence();
    const expectedLink = chance.url();
    const expectedTitle = chance.sentence();
    const encoded = encodeURIComponent(expectedSrc);
    render(<SocialMedia src={expectedSrc} desc={expectedDesc} link={expectedLink} title={expectedTitle}/>);

    expect(screen.getByRole('link')).toHaveAttribute('href', expectedLink);
    expect(screen.getByRole('link')).toHaveAttribute('title', expectedTitle);
    expect(screen.getByRole('img')).toHaveAttribute('src', `/_next/image?url=${encoded}&w=96&q=75`);
    expect(screen.getByRole('img')).toHaveAttribute('alt', expectedDesc);
    expect(screen.getByRole('img')).toHaveAttribute('height', '35');
    expect(screen.getByRole('img')).toHaveAttribute('width', '35');
  });
});
