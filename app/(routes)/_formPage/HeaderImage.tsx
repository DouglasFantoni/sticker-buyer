import Image from 'next/image';

interface IHeaderImageProps {}

export default function HeaderImage({}: IHeaderImageProps) {
	return <Image alt="header da página" fill sizes="480px" src={'/images/header.png'} priority />;
}
