import { Button } from '@/components/ui';
import { Nav } from '@/components/ui/Nav';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { Checkbox, CheckboxContainer } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch, SwitchContainer } from '@/components/ui/switch';
import { cn } from '@/utils';

export default async function Home() {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-screen-sm flex-col items-center justify-center p-8',
      )}
    >
      <h2 className={cn('font-heading mb-8 text-4xl font-semibold')}>
        Template
      </h2>
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Heading
      </h3>
      <p className={cn('mb-8 leading-loose')}>
        Ex excepteur irure est proident ut qui. Laboris velit aliquip pariatur
        dolore non ea proident esse veniam veniam culpa in occaecat. Enim id
        occaecat labore qui veniam nisi proident aliquip. Ex irure officia
        consequat consequat sint irure. Nulla culpa sit aliquip ipsum consequat
        enim culpa occaecat ea sit aute. Deserunt qui esse voluptate sit.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Adipisicing in eiusmod culpa exercitation nisi irure dolor labore duis
        amet excepteur aute. Velit consectetur irure occaecat exercitation. Ea
        ullamco exercitation do anim eiusmod excepteur esse ea.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Lorem dolore officia id minim culpa sunt amet laboris. Velit in proident
        aliquip dolor laborum sint. Consectetur amet velit nostrud proident
        proident enim non culpa veniam tempor ullamco. Et excepteur nisi eu
        commodo dolor duis tempor ex nulla culpa ipsum dolor sunt. Sint quis
        veniam exercitation qui aliquip. Ipsum non irure irure sit et
        reprehenderit cupidatat.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Aliqua exercitation consequat non velit fugiat ea ex nisi. Laborum
        aliquip amet ad mollit nulla Lorem dolor amet. Magna quis non irure
        tempor minim occaecat cupidatat labore dolore nisi tempor. Aliqua do
        officia pariatur irure nulla veniam ullamco amet enim enim deserunt
        veniam magna incididunt.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Minim ut commodo ipsum fugiat sit fugiat. Magna tempor Lorem ad culpa
        sunt voluptate et est exercitation voluptate excepteur pariatur. Minim
        irure reprehenderit do consectetur minim excepteur et exercitation sunt.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Velit quis non id ea ex reprehenderit in aute consectetur exercitation
        commodo. Amet magna id consequat enim Lorem Lorem ad cupidatat sunt
        labore officia. Mollit exercitation nisi ex occaecat proident ullamco in
        id. Ullamco enim laboris sit voluptate commodo aliqua consequat pariatur
        minim sint velit cillum dolore. Nostrud exercitation minim et quis duis
        anim veniam. Velit ex duis ut proident et sint do occaecat.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Duis nulla veniam occaecat aliqua enim ut enim ipsum sunt. Ea aute
        laborum adipisicing do culpa reprehenderit aliqua. Exercitation in minim
        labore fugiat culpa et commodo pariatur eu mollit id dolor magna.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Aliqua elit elit minim ut mollit ipsum ipsum voluptate officia. Lorem
        nulla officia consequat aliquip occaecat occaecat officia eiusmod. Ad ut
        consequat pariatur fugiat nulla exercitation deserunt minim duis.
      </p>
      <p className={cn('mb-8 leading-loose')}>
        Cillum quis est voluptate officia ad dolor do non magna nostrud sit.
        Dolore enim aliquip nisi eu deserunt enim consectetur occaecat ullamco
        pariatur fugiat labore nostrud voluptate. Lorem fugiat nulla ad
        occaecat. Sunt labore ea sint exercitation exercitation fugiat.
      </p>
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Navigation
      </h3>
      <Nav className={cn('mb-8')} />
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Buttons
      </h3>
      <div
        className={cn(
          'mb-8 flex flex-col items-center gap-6 md:flex-row md:flex-wrap',
        )}
      >
        <Button size={'icon'}>{`(^.^)`}</Button>
        <Button size={'sm'}>Click Me</Button>
        <Button size={'default'}>Click Me</Button>
        <Button size={'lg'}>Click Me</Button>
        <Button variant={'outline'} size={'lg'}>
          Click Me
        </Button>
        <Button variant={'destructive'} size={'lg'}>
          Click Me
        </Button>
        <Button variant={'secondary'} size={'lg'}>
          Click Me
        </Button>
        <Button variant={'ghost'} size={'lg'}>
          Click Me
        </Button>
        <Button variant={'link'} size={'lg'}>
          Click Me
        </Button>
      </div>
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Tooltips
      </h3>
      <div className={cn('mb-8')}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size={'lg'}>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Switches
      </h3>
      <SwitchContainer className={cn('mb-8')}>
        <Switch id="switch-me" />
        <Label htmlFor="switch-me">Switch me</Label>
      </SwitchContainer>
      <h3 className={cn('font-heading mb-8 text-3xl font-semibold')}>
        Checkboxes
      </h3>
      <CheckboxContainer className={cn('mb-8')}>
        <Checkbox id="check-me" />
        <Label htmlFor="check-me">Check me</Label>
      </CheckboxContainer>
    </div>
  );
}
