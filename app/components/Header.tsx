import Nav from './Nav';
import Logo from './Logo';

export default function Header({ activeSection, miniHeader }: { activeSection: string; miniHeader: boolean; }) {
  const miniNavStyling = 'p-2 pr-6 border-b-2 border-mred';

  return (
    <div
      className={`
        HEADER fixed top-0 right-0 w-full flex justify-between items-center z-10 bg-gray-100
        ${miniHeader ? miniNavStyling : 'p-4 pr-10'}
      `}
    >
      <Logo width={miniHeader ? 60 : 100} height={miniHeader ? 45 : 85} />
      <Nav activeSection={activeSection} miniHeader={miniHeader} />
    </div>
  );
}
