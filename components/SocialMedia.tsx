import React, {type FunctionComponent} from 'react';
import Image from 'next/image';
import styles from '../styles/SocialMedia.module.css';

type OwnProps = {
  link: string;
  desc: string;
  src: string;
  title: string;
};

const SocialMedia: FunctionComponent<OwnProps> = ({
                                                    link,
                                                    desc,
                                                    src,
                                                    title,
                                                  }) => (
  <div className={styles.socialMedia}>
    <a href={link} title={title}>
      <Image src={src} alt={desc} height={35} width={35}/>
    </a>
  </div>
);

export default SocialMedia;
