import headerImg from '@/public/images/header.png';
import Image from 'next/image';

interface IHeaderImageProps {}

export default function HeaderImage({}: IHeaderImageProps) {
	return <Image alt="header da página" fill sizes="480px" src={headerImg} priority />;
}
